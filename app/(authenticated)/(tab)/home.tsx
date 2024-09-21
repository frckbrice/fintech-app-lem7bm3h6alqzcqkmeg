import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import CustomButton from '@/components/custom-button';
import CustomDropdown from '@/components/drop-down';


const BALANCE = 1420;

const Home = () => {

    const onAddMoney = () => {

    }

    return (
        <ScrollView className='bg-background' >
            <View className='m-[80px] items-center'>
                <View className='flex items-end justify-center gap-3 relative' >
                    <Text className='text-[64px] font-semibold'>{BALANCE}</Text>
                    <Text className='text-[32px] ml-[5px] absolute -right-4 bottom-2'>&euro;</Text>
                </View>
            </View>

            {/* action row */}
            <View className='items-center  flex-row justify-between  p-[20px]'>
                <CustomButton
                    title='Add Money'
                    icons={'add'}
                    handlePress={onAddMoney}
                    containerStyles="justify-center items-center flex-col"
                />
                <CustomButton title='exchange' icons={'refresh'} handlePress={onAddMoney} />
                <CustomButton
                    title='details'
                    icons={'list'}
                    handlePress={onAddMoney}
                    containerStyles="justify-center items-center flex-col"
                />
                <CustomDropdown />
            </View>
        </ScrollView>
    )
}

export default Home;
