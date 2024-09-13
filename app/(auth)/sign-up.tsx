
// import libs
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

// import locals
import { Colors, defaultStyles } from '@/constants';
import errorClass from "@/utils/error-class";

const LogoutPage = () => {


    // state for country code
    const [countryCode, setCountryCode] = React.useState('+237');
    const [phoneNumber, setPhoneNumber] = React.useState('');



    // sign up function
    const onSingUp = () => {
        // TODO: sign up logic here
    }
    errorClass.log(phoneNumber, 'INFO');
    return (

        <View style={defaultStyles.container}>
            <Text style={[defaultStyles.header, { textAlign: 'center' }]}> Start Amazing Journey with Us!</Text>
            <Text style={defaultStyles.descriptionText}>
                Enter your phone number. We will send you a confirmation code there.
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { padding: 10, width: 'auto' }]}
                    placeholder='Country code'
                    placeholderTextColor={Colors.gray}
                    value={countryCode}
                />
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder='Phone number'
                    keyboardType='numeric'
                    // placeholderTextColor={Colors.gray}
                    value={phoneNumber}
                    onChangeText={(num) => setPhoneNumber(num)}
                />
            </View>

            {/* go back to sign in if there is already an account */}
            <Link href="/sign-in" replace asChild>
                <TouchableOpacity>
                    <Text style={[defaultStyles.textLink, { textAlign: 'center' }]}>
                        Already have an account? Sign in
                    </Text>
                </TouchableOpacity>
            </Link>

            {/* add space between */}
            <View style={{ flex: 1 }} />

            <TouchableOpacity
                style={[
                    defaultStyles.pillButton,
                    phoneNumber ? styles.enabled : styles.disable,
                    { marginBottom: 20, }]} onPress={onSingUp}
            >
                <Text style={[defaultStyles.buttonText]} >
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 40,
        flexDirection: 'row'
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 20,
        backgroundColor: Colors.gray,
        padding: 20,
        borderRadius: 16,
        marginRight: 10
    },
    enabled: {
        backgroundColor: Colors.primary
    },
    disable: {
        backgroundColor: Colors.primaryMuted
    }
})


export default LogoutPage