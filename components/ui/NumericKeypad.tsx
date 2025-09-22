import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

type DecimalSeparator = '.' | ',';

type NumericKeypadProps = {
  onPress: (value: string) => void;
  decimalSeparator?: DecimalSeparator;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
};

export const NumericKeypad: FC<NumericKeypadProps> = ({
  onPress,
  decimalSeparator = '.',
  buttonStyle,
  buttonTextStyle,
  containerStyle,
}) => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', decimalSeparator, '0', 'delete'];

  return (
    <View style={[styles.container, containerStyle]}>
      {buttons.map((button, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [styles.button, buttonStyle, pressed && DEFAULT_STYLES.pressed]}
          onPress={() => onPress(button)}
        >
          {button === 'delete' && <Ionicons name="backspace" size={30} color="#FFFFFF" />}
          {button !== 'delete' && (
            <Text style={[styles.buttonText, buttonTextStyle]}>{button}</Text>
          )}
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    aspectRatio: 1 / 0.8,
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 20,
    justifyContent: 'center',
    margin: '1.5%',
    width: '30%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '600',
  },
});
