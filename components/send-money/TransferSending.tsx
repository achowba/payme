import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

const TransferSending = () => {
  return (
    <Animated.View style={styles.container} exiting={FadeOutDown.duration(100)}>
      <Animated.View
        style={[DEFAULT_STYLES.transferIconContainer, styles.imageContainer]}
        entering={FadeInDown.duration(300).delay(300)}
      >
        <Image style={styles.image} source={require('@/assets/images/icons/paper-plane.png')} />
      </Animated.View>
      <View style={DEFAULT_STYLES.transferTextContainer}>
        <Animated.Text
          style={[DEFAULT_STYLES.text, DEFAULT_STYLES.transferStatusLabelText]}
          entering={FadeInDown.duration(300).delay(400)}
        >
          Waiting...
        </Animated.Text>
        <Animated.Text
          style={[DEFAULT_STYLES.text, DEFAULT_STYLES.transferStatusDescriptionText]}
          entering={FadeInDown.duration(300).delay(500)}
        >{`Don't leave it to finish!`}</Animated.Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#222222',
  },
  textContainer: {
    alignItems: 'center',
  },
  image: {
    aspectRatio: 1,
    marginLeft: 10,
    transform: [{ rotate: '45deg' }],
    width: '50%',
  },
});

export default TransferSending;
