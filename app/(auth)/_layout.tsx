
//libraries
import { Colors } from '@/constants'
import { Ionicons } from '@expo/vector-icons'
import { Link, Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function AuthLayout() {

    const router = useRouter();

    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-up"
                    options={{
                        title: '',
                        headerBackTitle: '',
                        headerShadowVisible: false,
                        headerStyle: { backgroundColor: Colors.background },
                        headerLeft: () => (
                            <TouchableOpacity onPress={router.back}>
                                <Ionicons name="arrow-back" size={34} color={Colors.dark} />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Stack.Screen
                    name="sign-in"
                    options={{
                        title: '',
                        headerBackTitle: '',
                        headerShadowVisible: false,
                        headerStyle: { backgroundColor: Colors.background },
                        headerLeft: () => (
                            <TouchableOpacity onPress={router.back}>
                                <Ionicons name="arrow-back" size={34} color={Colors.dark} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <Link href={'/help'} asChild>
                                <TouchableOpacity>
                                    <Ionicons name="help-circle-outline" size={34} color={Colors.dark} />
                                </TouchableOpacity>
                            </Link>
                        ),
                    }}
                />
            </Stack>

            <StatusBar backgroundColor='#161622' style='light' />
        </>
    )
}