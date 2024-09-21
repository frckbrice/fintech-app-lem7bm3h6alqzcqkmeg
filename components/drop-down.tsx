import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

type TDropdownProps = {
    labelField: string;
    valueField: string;
};

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
];

const CustomDropdown = () => {
    const [value, setValue] = useState<{ label: string; value: string } | null>(null);

    return (
        <View className='w-[60px] h-[60px]'>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField={value?.label}
                valueField={value?.value}
                placeholder=""
                value={value}
                onChange={(item) => {
                    setValue(item);
                }}
            />
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: { fontSize: 16 },
    selectedTextStyle: { fontSize: 16 },
    inputSearchStyle: { height: 40, fontSize: 16 },
    iconStyle: { width: 20, height: 20 },
});
