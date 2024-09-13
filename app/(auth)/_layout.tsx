
//libraries
import { Stack, useRouter, Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, useColorScheme } from "react-native";


export default function AuthLayout() {
    const router = useRouter();
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-up" // if there were no (auth) rout group, we'd have used individual routes stack screens
                    options={{
                        // headerShown: false
                        title: '',
                        headerBackTitle: '',
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: Colors.background
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => router.back()}>
                                <Ionicons name="arrow-back" size={30} color="black" />
                            </TouchableOpacity>
                        )
                    }} />
                <Stack.Screen
                    name="sign-in" // if there were no (auth) rout group, we'd have used individual routes stack screens
                    options={{
                        // headerShown: false
                        title: '',
                        headerBackTitle: '',
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: Colors.background
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => router.back()}>
                                <Ionicons name="arrow-back" size={30} color="black" />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <Link href="/help" replace asChild>
                                <TouchableOpacity >
                                    <Ionicons name="help-circle" size={30} color="black" />
                                </TouchableOpacity>
                            </Link>
                        )
                    }} />
            </Stack>

            {/* <StatusBar backgroundColor='#161622' style='light' /> */}
        </>
    )
}
