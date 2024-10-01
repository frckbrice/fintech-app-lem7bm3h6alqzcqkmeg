import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { AppState, AppStateStatus } from 'react-native';

// use mmkv storage
import { MMKV } from "react-native-mmkv";

const storage = new MMKV({
    id: "inactivity-storage"
})
export const UserInactivityProvider = ({ children }: { children: React.ReactNode }) => {

    // access the appState
    const appState = React.useRef(AppState.currentState);
    const router = useRouter();
    const isSignedIn = useAuth();

    React.useEffect(() => {
        const subscription = AppState.addEventListener("change", HandleAppStateChange);
        return () => subscription.remove();
    }, [])

    // this function get the state of the app : where it is on foreground: active or background:inactive
    const HandleAppStateChange = async (nextAppState: AppStateStatus) => {
        // record start time when going inactive ie background
        if (nextAppState === 'background')
            recordStartTime();
        else if (nextAppState === 'active' && appState.current.match(/background/)) {
            const elapsed = performance.now() - (storage.getNumber('startTime') || 0)
            // if the elaspse id > 3s from the return from inactive to active, 
            // we move the user to the lock screen
            if (elapsed > 3000 && isSignedIn)
                router.replace('/(authenticated)/(modals)/lock')
        }


        appState.current = nextAppState;
    }

    // record start time when the app state is active
    const recordStartTime = () => {
        storage.set('startTime', performance.now())
    }

    return children;
}
