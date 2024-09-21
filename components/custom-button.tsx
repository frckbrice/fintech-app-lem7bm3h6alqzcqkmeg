import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "@/constants";


type ButtonProps = {
  title: string,
  handlePress: () => void,
  containerStyles?: string,
  textStyles?: string,
  isLoading?: boolean,
  icons?: typeof Ionicons.defaultProps;
}
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  icons
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8} // opacity of the button when pressed
      className={` ${containerStyles} ${isLoading ? "opacity-50" : ""
        } `}
      disabled={isLoading}
    >

      {icons ? (<View className=" w-[60px] h-[60px] bg-gray-100 rounded-full items-center justify-center">
        <Ionicons name={icons} size={30} color={Colors.dark} />
      </View>) : null}

      <Text className={`${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
