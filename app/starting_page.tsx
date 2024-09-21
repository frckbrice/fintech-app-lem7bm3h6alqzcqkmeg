import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import React from 'react';
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
    const { user } = useUser()

    return (
        <View className="flex-1 items-center justify-center">
            <SignedIn >
                <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
            </SignedIn>
            <SignedOut>
                <Link href="/sign-in">
                    <Text>Sign In</Text>
                </Link>
                <Link href="/sign-up">
                    <Text>Sign Up</Text>
                </Link>
            </SignedOut>
        </View>
    )
}
