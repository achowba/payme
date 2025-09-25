import { COLORS } from '@/constants/colors.constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tinycolor from 'tinycolor2';

type TooltipProps = {
  value: number;
  color: string;
};

const Tooltip = ({ value, color }: TooltipProps) => {
  const isCardColorDark = tinycolor(color).isDark();
  console.log('Tooltip color:', color);
  console.log('isCardColorDark:', isCardColorDark);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text
        style={[styles.text, { color: isCardColorDark ? COLORS.dark.text : COLORS.light.text }]}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.primary,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
  text: {
    color: COLORS.dark.text,
  },
});

export default Tooltip;
