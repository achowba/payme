import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonPrimaryProps = {
  children: ReactNode;
  onPress?: () => void;
};

const ButtonPrimary = ({ children, onPress }: ButtonPrimaryProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && DEFAULT_STYLES.pressed]}
      onPress={onPress!}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark.purple,
    borderRadius: 100,
    padding: 30,
    textAlign: 'center',
    width: '100%',
  },
  buttonText: {
    color: COLORS.dark.text,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ButtonPrimary;
