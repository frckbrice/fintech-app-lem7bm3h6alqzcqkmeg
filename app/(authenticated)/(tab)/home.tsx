import * as React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import CustomButton from '@/components/custom-button';
import CustomDropdown from '@/components/drop-down';
import { useBalanceStore } from '@/store/balance';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants';
import WidgetList from '@/components/sortable-list/widget-list';
import { useHeaderHeight } from "@react-navigation/elements";


const BALANCE = 1420;

const Home = () => {

    // get the header of the page
    const headerHeight = useHeaderHeight();

    // call all props of our store
    const {
        balance,
        clearTransaction,
        runTransaction,
        transactions
    } = useBalanceStore();

    const onAddMoney = () => {
        runTransaction({
            title: 'add Money',
            amount: Math.floor(Math.random() * 1000 * (Math.random() > 0.5 ? 1 : -1)),
            date: new Date().toISOString(),
            id: crypto.randomUUID()
        })
    }

    return (
        <ScrollView className='bg-background'
            contentContainerStyle={{ paddingTop: headerHeight }}
        >
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
                <CustomButton title='exchange' icons={'refresh'} handlePress={clearTransaction} />
                <CustomButton
                    title='details'
                    icons={'list'}
                    handlePress={() => { }}
                    containerStyles="justify-center items-center flex-col"
                />
                {/* dropdown */}
                <CustomDropdown
                    handlePress={() => { }}
                    containerStyles=" w-[60px] h-[60px] bg-gray-100 rounded-full items-center justify-center"
                    icons={'ellipsis-horizontal'}
                />
            </View>

            <Text className='text-[20px] font-bold m-[20px] mb-[10px]  '>Transactions</Text>
            <View>
                {transactions.length ? transactions?.reverse().map((tx) => (
                    <View key={tx.id} className='flex items-center gap-[16px]'>
                        <View className='w-[40px] h-[40px] rounded-lg bg-[#D8DCE2] justify-center items-center'>
                            <Ionicons
                                name={tx.amount ? 'add' : 'remove'}
                                size={24}
                                color={Colors.dark}
                            />
                        </View>
                        <View className='flex-1'>
                            <Text className='text-[#626D77] font-[400px]'>{tx.title}</Text>
                            <Text className='text-[#626D77] text-[12px]'>{new Date(tx.date).toLocaleDateString()}</Text>
                        </View>
                        <Text>{tx.amount}&euro;</Text>
                    </View>
                )) : (
                    <Text className='p-[14px] text-[#626D77] mx-[20px] bg-white rounded-lg gap-[20px]'> No transactions yet</Text>
                )}
            </View>

            {/* widget list */}
            <Text className='text-[20px] font-bold m-5 mb-2.5'>Widgets</Text>
            <WidgetList />
        </ScrollView>
    )
}

export default Home;
