import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonPrimaryProps = {
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

const ButtonPrimary = ({ children, onPress, disabled = false }: ButtonPrimaryProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && DEFAULT_STYLES.pressed,
        disabled && DEFAULT_STYLES.disabledBtn,
      ]}
      onPress={onPress!}
      disabled={disabled}
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
