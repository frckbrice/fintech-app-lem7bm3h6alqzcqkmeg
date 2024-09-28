
import { useFonts } from "expo-font";
import { Stack, SplashScreen, useRouter, useSegments, } from "expo-router";
import React, { useEffect } from "react";
import { useColorScheme, View } from "react-native";
import * as SecureStore from 'expo-secure-store'
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import { Colors } from "@/constants";
import { ActivityIndicator } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { PortalHost } from '@rn-primitives/portal';

// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// prevent the splash screem from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key in your .env',
  )
}

export function RootLayoutNav() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // get our position in the route stack
  const segments = useSegments();
  const router = useRouter();

  const { isSignedIn, isLoaded } = useAuth()


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    if (!isLoaded) return;
  }, [loaded]);

  useEffect(() => {
    const inAuthGroup = segments[0] === '(authenticated)';

    if (isSignedIn && !inAuthGroup) {
      setTimeout(() => {
        router.replace('/home');
      }, 1000);
    } else if (!isSignedIn) {
      setTimeout(() => {
        router.replace('/');
      }, 1000);
    }
  }, [isSignedIn]);


  if (!loaded || !isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <>

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="help" options={{ title: 'Help', presentation: 'modal' }} />
        <Stack.Screen name="(authenticated)/(tab)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(authenticated)/(tab)/crypto" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="(tab)/home" options={{ headerShown: false }} />
      <Stack.Screen name="(tab)/invest" options={{ headerShown: false }} />
      <Stack.Screen name="(tab)/life-style" options={{ headerShown: false }} />
      <Stack.Screen name="(tab)/transfers" options={{ headerShown: false }} /> */}
      </Stack>
      {/* Default Portal Host (one per app) */}
      <PortalHost />
    </>

  );
}


const RootLayout = () => {

  return (

    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        {/* <StatusBar style="light" /> */}
        <RootLayoutNav />
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
