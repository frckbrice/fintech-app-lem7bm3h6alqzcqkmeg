import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, Link, SplashScreen, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { StatusBar, } from 'expo-status-bar';


// prevent the splash screem from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();


export function RootLayout() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen
        name="help"
        options={{
          // headerShown: false
          title: 'Help',
          presentation: 'modal',
        }} />
    </Stack>
  );
}


const RootLayoutNav = () => {
  return (
    <>
      <StatusBar style="light" />
      <RootLayout />
    </>
  );
};

export default RootLayoutNav;
