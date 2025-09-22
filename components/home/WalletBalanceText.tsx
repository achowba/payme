import { COLORS } from '@/constants/colors.constants';
import { WALLET_BALANCE } from '@/constants/money.constants';
import { calculatePowerOfTen } from '@/utils/number.utils';
import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import { CountUp } from 'use-count-up';

type WalletBalanceTextProps = {
  balance?: number;
  initialDisplayValue?: number;
  balanceTextLargeStyle?: TextStyle | TextStyle[];
  balanceTextSmallStyle?: TextStyle | TextStyle[];
};

const WalletBalanceText = ({
  balance = WALLET_BALANCE,
  initialDisplayValue,
  balanceTextLargeStyle,
  balanceTextSmallStyle,
}: WalletBalanceTextProps) => {
  const [balanceLarge, balanceSmall] = balance.toFixed(2).split('.');
  const start = initialDisplayValue ? initialDisplayValue : calculatePowerOfTen(balanceLarge);

  const balanceLargeTextStyle = StyleSheet.flatten([
    styles.text,
    styles.balanceTextLarge,
    balanceTextLargeStyle,
  ]);
  const balanceSmallTextStyle = StyleSheet.flatten([
    styles.text,
    styles.balanceTextSmall,
    balanceTextSmallStyle,
  ]);

  return (
    <View style={styles.container}>
      <Text style={balanceLargeTextStyle}>$</Text>
      <Text style={balanceLargeTextStyle}>
        <CountUp
          start={start}
          end={parseInt(balanceLarge)}
          isCounting
          duration={1}
          easing="easeInCubic"
          thousandsSeparator=","
        />
        .
      </Text>
      <Text style={balanceSmallTextStyle}>{balanceSmall}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  text: {
    color: COLORS.dark.text,
  },
  balanceTextLarge: {
    fontSize: 55,
    fontWeight: '600',
  },
  balanceTextSmall: {
    bottom: 5,
    fontSize: 30,
    fontWeight: '500',
  },
});

export default WalletBalanceText;
