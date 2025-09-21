import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { IContact } from '@/types';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

type TransferSentProps = {
  contact: IContact | null;
};

const TransferSent = ({ contact }: TransferSentProps) => {
  return (
    <Animated.View style={styles.container} exiting={FadeOutDown.duration(300)}>
      <Animated.View
        style={[DEFAULT_STYLES.transferIconContainer, styles.iconContainer]}
        entering={FadeInDown.duration(300)}
      >
        <FontAwesome6 name="check" size={70} color="#000000" />
      </Animated.View>
      <View style={DEFAULT_STYLES.transferTextContainer}>
        <Animated.Text
          style={[DEFAULT_STYLES.text, DEFAULT_STYLES.transferStatusLabelText]}
          entering={FadeInDown.duration(300).delay(200)}
        >
          Successfully Sent!
        </Animated.Text>
        <Animated.Text
          style={[DEFAULT_STYLES.text, DEFAULT_STYLES.transferStatusDescriptionText]}
          entering={FadeInDown.duration(300).delay(300)}
        >
          Sent to {contact?.firstName} {contact?.lastName} - Payme
        </Animated.Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: COLORS.dark.yellow,
  },
});

export default TransferSent;
