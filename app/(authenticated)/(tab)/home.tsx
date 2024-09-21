import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import CustomButton from '@/components/custom-button';
import CustomDropdown from '@/components/drop-down';
import { useBalanceStore } from '@/store/balance';


const BALANCE = 1420;

const Home = () => {

    // call all props of our store
    const {
        balance,
        clearTransaction,
        runTransaction,
        transactions
    } = useBalanceStore();

    const onAddMoney = () => {
        runTransaction({
            title: 'add',
            amount: 100,
            date: new Date().toISOString(),
            id: crypto.randomUUID()
        })
    }

    return (
        <ScrollView className='bg-background' >
            <View className='m-[30px] items-center'>
                <View className='flex items-end justify-center gap-3 relative' >
                    <Text className='text-[54px] font-semibold'>{BALANCE}</Text>
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
                <CustomDropdown
                    handlePress={onAddMoney}
                    containerStyles=" w-[60px] h-[60px] bg-gray-100 rounded-full items-center justify-center"
                    icons={'ellipsis-horizontal'}
                />
            </View>
        </ScrollView>
    )
}

export default Home;
