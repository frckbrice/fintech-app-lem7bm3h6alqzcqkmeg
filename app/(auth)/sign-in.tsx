
// import libs
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { Link, useRouter, Stack } from 'expo-router';

// import locals
import { Colors, defaultStyles } from '@/constants';
import errorClass from "@/utils/error-class";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { SignInOptionKey } from '@/constants';

const LoginPage = () => {


    // state for country code
    const [countryCode, setCountryCode] = React.useState('+237');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const router = useRouter();

    // ...
    const onSignIn = async (type: SignInOptionKey) => {
        if (type === 'Phone') {
            // Your code for phone sign-in
        } else {
            // Your code for other sign-in types
        }
    }
    errorClass.log(phoneNumber, 'INFO');
    return (

        <SafeAreaView style={defaultStyles.container}>

            <Text style={[defaultStyles.header, { textAlign: 'center' }]}> WelCome Back!</Text>
            <Text style={defaultStyles.descriptionText}>
                Enter your phone number associated with your account.
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
            <Link href="/sign-up" replace asChild>
                <TouchableOpacity>
                    <Text style={[defaultStyles.textLink, { textAlign: 'center' }]}>
                        Don't have an account? Sign up
                    </Text>
                </TouchableOpacity>
            </Link>

            {/* login button */}
            <TouchableOpacity
                style={[
                    defaultStyles.pillButton,
                    phoneNumber ? styles.enabled : styles.disable,
                    { marginBottom: 20, marginTop: 30 }]} onPress={() => onSignIn('Phone')}
            >
                <Text style={[defaultStyles.buttonText]} >
                    Continue
                </Text>
            </TouchableOpacity>

            {/* add space between line */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16 }}>
                <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
                <Text style={{ color: Colors.gray }}>or</Text>
                <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
            </View>

            {/* add social logins */}

            <TouchableOpacity
                style={[
                    defaultStyles.pillButton,
                    { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 20, backgroundColor: 'white' }
                ]}
                onPress={() => onSignIn("Email")}
            >
                <Ionicons name="mail" size={24} color="black" />
                <Text style={[defaultStyles.buttonText, { color: Colors.gray }]} >
                    Continue with Email
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[
                    defaultStyles.pillButton,
                    { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 20, backgroundColor: 'white' }
                ]}
                onPress={() => onSignIn("Google")}
            >
                <Ionicons name="logo-google" size={24} color="black" />
                <Text style={[defaultStyles.buttonText, { color: Colors.gray }]} >
                    Continue with Google
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    defaultStyles.pillButton,
                    { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 20, backgroundColor: 'white' }
                ]}
                onPress={() => onSignIn("Apple")}
            >
                <Ionicons name="logo-apple" size={24} color="black" />
                <Text style={[defaultStyles.buttonText, { color: Colors.gray }]} >
                    Continue with Apple
                </Text>
            </TouchableOpacity>
        </SafeAreaView>

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
        paddingVertical: 15,
        paddingHorizontal: 20,
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


export default LoginPage