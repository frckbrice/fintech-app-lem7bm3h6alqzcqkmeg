import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { Alert, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { isClerkAPIResponseError, useSignIn, useSignUp } from '@clerk/clerk-expo';
import { Colors, defaultStyles } from '@/constants';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import errorClass from '@/utils/error-class';

const CELL_COUNT = 6;
// https://github.com/retyui/react-native-confirmation-code-field
const Page = () => {
    const { phone, signin } = useLocalSearchParams<{ phone: string, signin?: string }>();

    const [code, setCode] = useState('');
    const { signIn } = useSignIn();
    const { signUp, setActive } = useSignUp();

    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode,
    });

    useEffect(() => {
        if (code.length === 6) {
            // apply clerk log auth here
            if (signin === 'true')
                verifySignIn();
            else
                verifyCode()
        }
    }, [code]);

    const verifySignIn = async () => {
        try {
            // verify from the clerk side
            await signUp!.attemptPhoneNumberVerification({
                code
            });
            // activate the user after verification.
            setActive && await setActive({ session: signUp.createdSessionId });
            errorClass.log(JSON.stringify(signIn, null, 2), "INFO");
            Alert.alert("Success", "Account created successfully");
        } catch (error) {
            errorClass.log(JSON.stringify(error, null, 2), "ERROR");
            if (isClerkAPIResponseError(error)) {
                Alert.alert("Error", error.errors[0].message);
            }
        }
    };
    const verifyCode = async () => {
        try {
            // verify from the clerk side
            await signIn!.attemptFirstFactor({
                strategy: 'phone_code',
                code
            });
            // activate the user after verification.
            setActive && await setActive({ session: signIn!.createdSessionId });
            errorClass.log(JSON.stringify(signIn, null, 2), "INFO");
            Alert.alert("Success", "Account created successfully");
        } catch (error) {
            errorClass.log(JSON.stringify(error, null, 2), "ERROR");
            if (isClerkAPIResponseError(error)) {
                Alert.alert("Error", error.errors[0].message);
            }
        }
    };

    return (
        <SafeAreaView style={defaultStyles.container}>
            <Text style={defaultStyles.header}>6-digits code</Text>
            <Text style={defaultStyles.descriptionText}>
                Code sent to {phone} unless you already have an account.
            </Text>
            {/* code fields */
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={code as any}
                    onChangeText={setCode}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                    testID="my-code-input"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Fragment key={index}>
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                            {index === 2 ? <View key={`separator-${index}`} style={styles.separator} /> : null}
                        </Fragment>
                    )}
                />}

            {/* go back */}
            <Link href={'/sign-in'} replace asChild>
                <TouchableOpacity>
                    <Text style={defaultStyles.textLink}>
                        Already have an account ? Log-in
                    </Text>
                </TouchableOpacity>
            </Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: {

        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cell: {
        marginHorizontal: 5,
        marginVertical: 20,
        width: 45,
        height: 60,
        lineHeight: 38,
        justifyContent: 'center',
        borderRadius: 8,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    separator: {
        height: 2,
        width: 10,
        backgroundColor: Colors.gray,
        alignSelf: 'center',
    }
});


export default Page;