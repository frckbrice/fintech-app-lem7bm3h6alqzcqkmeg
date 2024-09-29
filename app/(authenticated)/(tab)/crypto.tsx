import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Currency } from '@/interface/crypto';
import { Href } from 'expo-router';
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors, defaultStyles } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

const Crypto = () => {

    // grab the header inset
    const headerHeight = useHeaderHeight();

    const { isPending, error, data: currencies } = useQuery({
        queryKey: ['currencies'],
        queryFn: () =>
            fetch('/api/listings').then((res) =>
                res.json(),
            ),
    });


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    // get the list of currencies IDs
    const ids = currencies?.map((curr: Currency) => curr.id).join(',');

    const { isPending: isInfoPending, error: infoError, data: infos } = useQuery({
        queryKey: ['info', 'ids'],
        queryFn: () =>
            fetch(`/api/info?ids=${ids}`)
                .then((res) =>
                    res.json(),
                ),
        enabled: !!ids  // this query will only run when the ids  exist                                              
    });


    if (isInfoPending) return 'Loading...'

    if (infoError) return 'An error has occurred: ' + infoError.message

    return (
        <ScrollView className='bg-[#F5F5F5]' contentContainerStyle={{ paddingTop: headerHeight }}>
            <Text style={defaultStyles.sectionHeader}>
                Latest Crypto
            </Text>
            <View style={defaultStyles.block}>
                {
                    currencies?.map((currency: Currency, index: number) => (
                        // we want to go out of our tab bar to no more show them
                        <Link href={'/crypto/' + currency.id as Href<string>} asChild key={currency.id + '-' + index}>
                            <TouchableOpacity className='flex gap-[14px] items-center' >
                                <Image
                                    source={{ uri: infos?.[currency.id].logo }}
                                    className='w-12 h-12'
                                />
                                <View className='flex-1 gap-1.5'>
                                    <Text style={{ fontWeight: 600, color: Colors.dark }}> {currency.name}</Text>
                                    <Text style={{ color: Colors.gray }}>
                                        {currency.symbol}
                                    </Text>
                                </View>
                                <View className='flex items-end gap-1.5'>
                                    <Text> {currency.quote.EUR.price.toFixed(2)}&euro;</Text>
                                    <View style={{}}>
                                        <Ionicons
                                            name={currency.quote.EUR.percent_change_1h > 0 ? 'caret-up' : 'caret-down'}
                                            size={16}
                                            color={currency.quote.EUR.percent_change_1h > 0 ? 'green' : 'red'}
                                        />
                                        <Text
                                            style={{ color: currency.quote.EUR.percent_change_1h > 0 ? 'green' : 'red' }}
                                        >
                                            {currency.quote.EUR.percent_change_1h.toFixed(2)}&#37;
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    ))
                }
            </View>

        </ScrollView >
    )
}

export default Crypto;
