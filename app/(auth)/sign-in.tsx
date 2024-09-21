
// // import libs
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Alert } from 'react-native';
// import React from 'react';
// import { Link, useRouter, Stack } from 'expo-router';

// // import locals
// import { Colors, defaultStyles } from '@/constants';
// import errorClass from "@/utils/error-class";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";
// import { SignInOptionKey } from '@/constants';
// import { isClerkAPIResponseError, useSignIn, } from '@clerk/clerk-expo';

// const LoginPage = () => {


//     // state for country code
//     const [countryCode, setCountryCode] = React.useState('+237');
//     const [phoneNumber, setPhoneNumber] = React.useState('');

//     const router = useRouter();

//     // clerk auth sign in function
//     const { signIn } = useSignIn();

//     // ...
//     const onSignIn = async (type: SignInOptionKey) => {
//         if (type === 'Phone') {
//             // Your code for phone sign-in
//             try {
//                 const fullPhoneNumber = countryCode + phoneNumber;
//                 const { supportedFirstFactors } = await signIn!.create({
//                     identifier: fullPhoneNumber
//                 });
//                 const firstPhoneFactor: any = supportedFirstFactors?.find((factor) => factor?.strategy === 'phone_code');

//                 const { phoneNumberId } = firstPhoneFactor;

//                 await signIn!.prepareFirstFactor({
//                     phoneNumberId,
//                     strategy: 'phone_code'
//                 });

//                 router.push({
//                     pathname: '/verify/[phone]',
//                     params: { phone: fullPhoneNumber, signin: 'true' }
//                 });

//             } catch (err: any) {
//                 errorClass.log(err.message, 'ERROR');
//                 if (isClerkAPIResponseError(err))
//                     if (err.errors[0].code === 'form_identifier_not_found')
//                         Alert.alert('Error', 'Phone number not found');
//             }
//         } else {
//             // Your code for other sign-in types
//             console.log()
//         }
//     }
//     errorClass.log(phoneNumber, 'INFO');
//     return (

//         <SafeAreaView style={defaultStyles.container}>

//             <Text style={[defaultStyles.header, { textAlign: 'center' }]}> WelCome Back!</Text>
//             <Text style={defaultStyles.descriptionText}>
//                 Enter your phone number associated with your account.
//             </Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={[styles.input, { padding: 10, width: 'auto' }]}
//                     placeholder='Country code'
//                     placeholderTextColor={Colors.gray}
//                     value={countryCode}
//                 />
//                 <TextInput
//                     style={[styles.input, { flex: 1 }]}
//                     placeholder='Phone number'
//                     keyboardType='numeric'
//                     // placeholderTextColor={Colors.gray}
//                     value={phoneNumber}
//                     onChangeText={(num) => setPhoneNumber(num)}
//                 />
//             </View>

//             {/* go back to sign in if there is already an account */}
//             <Link href="/sign-up" replace asChild>
//                 <TouchableOpacity>
//                     <Text style={[defaultStyles.textLink, { textAlign: 'center' }]}>
//                         Don't have an account? Sign up
//                     </Text>
//                 </TouchableOpacity>
//             </Link>

//             {/* login button */}
//             <TouchableOpacity
//                 style={[
//                     defaultStyles.pillButton,
//                     phoneNumber ? styles.enabled : styles.disable,
//                     { marginBottom: 20, marginTop: 30 }]} onPress={() => onSignIn('Phone')}
//             >
//                 <Text style={[defaultStyles.buttonText]} >
//                     Continue
//                 </Text>
//             </TouchableOpacity>

//             {/* add space between line */}
//             <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16 }}>
//                 <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
//                 <Text style={{ color: Colors.gray }}>or</Text>
//                 <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }} />
//             </View>

//             {/* add social logins */}

//             <TouchableOpacity
//                 style={[
//                     defaultStyles.pillButton,
//                     { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 20, backgroundColor: 'white' }
//                 ]}
//                 onPress={() => onSignIn("Email")}
//             >
//                 <Ionicons name="mail" size={24} color="black" />
//                 <Text style={[defaultStyles.buttonText, { color: Colors.gray }]} >
//                     Continue with Email
//                 </Text>
//             </TouchableOpacity>


//             <TouchableOpacity
//                 style={[
//                     defaultStyles.pillButton,
//                     { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 20, backgroundColor: 'white' }
//                 ]}
//                 onPress={() => onSignIn("Google")}
//             >
//                 <Ionicons name="logo-google" size={24} color="black" />
//                 <Text style={[defaultStyles.buttonText, { color: Colors.gray }]} >
//                     Continue with Google
//                 </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={[
//                     defaultStyles.pillButton,
//                     { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 20, backgroundColor: 'white' }
//                 ]}
//                 onPress={() => onSignIn("Apple")}
//             >
//                 <Ionicons name="logo-apple" size={24} color="black" />
//                 <Text style={[defaultStyles.buttonText, { color: Colors.gray }]} >
//                     Continue with Apple
//                 </Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     )
// };

// const styles = StyleSheet.create({
//     inputContainer: {
//         marginVertical: 40,
//         flexDirection: 'row'
//     },
//     input: {
//         borderColor: '#ccc',
//         borderWidth: 1,
//         fontSize: 20,
//         backgroundColor: Colors.gray,
//         paddingVertical: 15,
//         paddingHorizontal: 20,
//         borderRadius: 16,
//         marginRight: 10
//     },
//     enabled: {
//         backgroundColor: Colors.primary
//     },
//     disable: {
//         backgroundColor: Colors.primaryMuted
//     }
// })


// export default LoginPage

import React from 'react';
import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, TextInput, Button, View, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/form-field"
import CustomButton from "../../components/custom-button";


export default function Page() {
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()

    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('');
    const [isSubmiting, setIsSubmiting] = React.useState(false);


    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) {
            return
        }

        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            })

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                router.replace('/home')
            } else {
                // See https://clerk.com/docs/custom-flows/error-handling
                // for more info on error handling
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2))
        }
    }, [isLoaded, emailAddress, password])

    return (
        <SafeAreaView className=" h-full p-2">
            <ScrollView>
                <View className="w-full justify-center  px-4 my-6">
                    {/* <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[100%] h-[150px]"
                    /> */}
                    <Text className="text-3xl  text-semibold my-10  font-bold text-center">
                        Start Invest In Your Future.
                    </Text>

                    {/* form fields  */}

                    <FormField
                        title={"Email"}
                        value={emailAddress}
                        placeholder="Enter your username"
                        handleChangeText={(email: string) => setEmailAddress(email)}
                        otherStyles="mt-10"
                    />

                    <FormField<string>
                        title={"Password"}
                        value={password}
                        placeholder="Enter your password"
                        handleChangeText={(pass: string) => setPassword(pass)}
                        otherStyles="mt-7"
                    />
                    <CustomButton
                        title="Sign In"
                        handlePress={onSignInPress}
                        isLoading={isSubmiting}
                        containerStyles="my-6 bg-black  rounded-xl min-h-[62px] justify-center items-center p-4"
                        textStyles='text-white font-bold text-xl '
                    />

                    <View className="flex-row justify-center items-center my-10 gap-2">
                        <Text className="text-lg text-gray-700 font-pregular">
                            Don't have account ?
                        </Text>
                        <Link
                            href="/sign-up"
                            className="text-lg font-psemibold text-blue-700"
                        >
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}