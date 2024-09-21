// emailAddress bricefrkc@gmail.com password Test@123456789@

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
                    <Text className="text-3xl  text-semibold mb-10  font-bold text-center">
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