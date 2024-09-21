//libraries
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

//constants
import { icons } from "../constants";

type FormProps<T> = {
  title: string,
  value: T,
  placeholder: string,
  handleChangeText: (email: T) => void,
  otherStyles: string,
  keyboardType?: string,
}
export default function FormField<T extends string>({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}: FormProps<string>) {
  const [showPasswd, setShowpwd] = useState(false);

  return (
    <View className="space-y-2">
      <Text className="text-base  font-pmedium">{title}</Text>

      <View className="border-2 border-gray-200 rounded-2xl w-full px-4 h-16 focus:border-gray-100 items-center  flex-row justify-between">
        <TextInput
          placeholder={placeholder}
          className="flex text-muted font-psemibold text-gray-800 border-gray-50"
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={"#7b7b8b"}
          secureTextEntry={title === "Password" && !showPasswd}
        />
        {title === "Password" && (
          <TouchableOpacity
            // name={showPasswd ? "eye-off" : "eye"}
            // size={18}
            // color="#7b7b8b"
            onPress={() => setShowpwd((value) => !value)}
          >
            <Image
              source={!showPasswd ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};


