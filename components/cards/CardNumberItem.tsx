import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { calculatePowerOfTen } from '@/utils/number.utils';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { CountUp } from 'use-count-up';

type CardNumberItemProps = {
  number: number;
};

const CardNumberItem = ({ number }: CardNumberItemProps) => {
  const start = calculatePowerOfTen(number);

  return (
    <Text style={[DEFAULT_STYLES.text, styles.numberText]}>
      <CountUp start={start} end={number} isCounting duration={1} easing="easeInCubic" />
    </Text>
  );
};

const styles = StyleSheet.create({
  numberText: {
    fontSize: 26,
    fontWeight: '600',
  },
});

export default CardNumberItem;
