import { COLORS } from '@/constants/colors.constants';
import { ITransaction } from '@/types';
import { formatDate } from '@/utils/date.utils';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TransactionItemProps = {
  transaction: ITransaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const prefix = transaction.amount < 0 ? '-$' : '$';

  const [amountLarge, amountSmall] = Math.abs(transaction.amount).toFixed(2).split('.');

  return (
    <View style={styles.container}>
      <View style={styles.merchantContainer}>
        <View style={styles.merchantLogoContainer}>
          <Image
            style={styles.merchantLogo}
            source={transaction.merchant.logo}
            contentFit="contain"
          />
        </View>
        <View style={styles.merchantDetailsContainer}>
          <Text style={[styles.text, styles.merchantNameText]}>{transaction.merchant.name}</Text>
          <Text style={[styles.text, styles.transactionDateText]}>
            {formatDate(transaction.date)}
          </Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text style={[styles.text, styles.amountTextLarge]}>
          {prefix}
          {amountLarge}
        </Text>
        <Text style={[styles.text, styles.amountTextSmall]}>.{amountSmall}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  merchantContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  merchantLogoContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#303030',
    borderRadius: 100,
    justifyContent: 'center',
    padding: 0,
    width: 60,
  },
  merchantLogo: {
    aspectRatio: 1,
    borderRadius: 100,
    width: '70%',
  },
  merchantDetailsContainer: {},
  text: {
    color: COLORS.dark.text,
  },
  merchantNameText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  transactionDateText: {
    color: '#828282',
    fontSize: 15,
    fontWeight: '500',
  },
  amountContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  amountTextLarge: {
    fontSize: 25,
    fontWeight: '600',
  },
  amountTextSmall: {
    bottom: 2,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default TransactionItem;
