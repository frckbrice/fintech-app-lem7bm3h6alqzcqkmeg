import React from 'react';
import { View, Text, } from 'react-native'; 3
import { Tabs, Slot, Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/constants';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const TabsLayout = () => {
    return (
        <SafeAreaProvider className=''>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors.primary,
                    tabBarStyle: {
                        // backgroundColor: "#161622",
                        borderTopWidth: 1,
                        height: 80,
                        paddingBottom: 10,

                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        tabBarLabel: "Home",
                        tabBarIcon: ({ size, color, focused }: { size: number, color: string, focused: boolean }) => (
                            <FontAwesome name="registered" size={size} color={color} />
                        ),

                    }}
                />
                <Tabs.Screen
                    name="invest"
                    options={{
                        title: 'Invest',
                        tabBarIcon: ({ size, color, focused }: { size: number, color: string, focused: boolean }) => (
                            <FontAwesome name="line-chart" size={size} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="transfers"
                    options={{
                        title: 'Transfers',
                        tabBarIcon: ({ size, color, focused }: { size: number, color: string, focused: boolean }) => (
                            <FontAwesome name="exchange" size={size} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="life-style"
                    options={{
                        title: 'LifeStyle',
                        tabBarIcon: ({ size, color, focused }: { size: number, color: string, focused: boolean }) => (
                            <FontAwesome name="th" size={size} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="crypto"
                    options={{
                        title: 'Crypto',
                        tabBarIcon: ({ size, color, focused }: { size: number, color: string, focused: boolean }) => (
                            <FontAwesome name="bitcoin" size={size} color={color} />
                        )
                    }}
                />

            </Tabs >
        </SafeAreaProvider>
    )
}

export default TabsLayout;