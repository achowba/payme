import { DEFAULT_STYLES } from '@/constants/styles.constants';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const TransferSending = () => {
  const shakeValue = useSharedValue(0);

  const shakeAnimation = () => {
    shakeValue.value = withRepeat(
      withSequence(
        withTiming(-3, { duration: 50 }),
        withTiming(3, { duration: 50 }),
        withTiming(0, { duration: 50 })
      ),
      -1
    );
  };

  useEffect(() => {
    shakeAnimation();
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: shakeValue.value,
      },
      { rotate: '45deg' },
    ],
  }));

  return (
    <Animated.View style={styles.container} exiting={FadeOutDown.duration(100)}>
      <Animated.View
        style={[DEFAULT_STYLES.transferIconContainer, styles.imageContainer]}
        entering={FadeInDown.duration(300).delay(300)}
      >
        <Animated.Image
          style={[styles.image, animatedStyle]}
          source={require('@/assets/images/icons/paper-plane.png')}
        />
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
    height: '50%',
    marginLeft: 10,
    width: '50%',
  },
});

export default TransferSending;
