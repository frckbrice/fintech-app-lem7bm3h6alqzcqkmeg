
// libs
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAssets } from 'expo-asset'; // used to load the asset.
import { ResizeMode, Video } from 'expo-av'; // used to play the video.
import { Link } from 'expo-router';
import { defaultStyles } from '@/constants';
import { Colors } from '@/constants';
import { StatusBar } from 'expo-status-bar';

const LoginPage = () => {

  // create asset to load video. remark  the array of assets here
  const [assets] = useAssets([require('@/assets/video/intro.mp4')]);
  return (
    <View style={styles.container}>
      {assets && (
        <Video
          source={{ uri: assets[0].uri as string }}
          style={styles.video}
          isMuted
          isLooping
          shouldPlay
          resizeMode={ResizeMode.COVER}
        />
      )}

      <View style={styles.textStyle}>
        <Text style={styles.header}>The App That Change your life! </Text>
      </View>

      <View style={styles.buttons}>
        {/* <Link
          href="/sign-in"
          style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]}
          asChild>
          <TouchableOpacity>
            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 22 }}>
              Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href="/sign-up"
          style={[defaultStyles.pillButton, { flex: 1, backgroundColor: '#fff' }]}
          asChild>
          <TouchableOpacity  >
            <Text style={{ fontWeight: '700', fontSize: 22 }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Link> */}
        <Link
          href="/sign-up"
          style={[defaultStyles.pillButton, { flex: 1, backgroundColor: '#fff' }]}
          asChild>
          <TouchableOpacity  >
            <Text style={{ fontWeight: '700', fontSize: 22 }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="light" />
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  textStyle: {
    marginTop: 80, padding: 20
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    fontSize: 35,
    fontWeight: '900',
    marginBottom: 20,
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    // width: '100%',
    fontSize: 50,
    marginBottom: 60,
    paddingHorizontal: 40,
    gap: 20
  }
});

export default LoginPage