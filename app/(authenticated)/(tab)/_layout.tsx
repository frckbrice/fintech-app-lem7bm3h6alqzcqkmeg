import React from 'react';
import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Colors } from '@/constants';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from '@/components/custom-header';

const TabsLayout = () => {
    return (
        <SafeAreaProvider className=''>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors.primary,
                    tabBarBackground: () => (
                        // adding the blur with BlurView component.
                        <BlurView
                            intensity={100}
                            tint='light' // you can play around with this list of colors
                            className="bg-[rgba(0,0,0,0.5)] flex-1"
                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: "transparent",
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0

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
                        header: () => <CustomHeader />,
                        headerTransparent: true
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
                        ),
                        header: () => <CustomHeader />,
                        headerTransparent: true
                    }}
                />
            </Tabs >
        </SafeAreaProvider>
    )
}

export default TabsLayout;
