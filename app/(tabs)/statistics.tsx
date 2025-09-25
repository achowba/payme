import WalletBalanceText from '@/components/home/WalletBalanceText';
import { COLORS } from '@/constants/colors.constants';
import { TRANSACTIONS } from '@/data/transactions.data';
import { getRandomNumber } from '@/utils/number.utils';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TransactionsList from '../../components/transactions/TransactionsList';

const StatisticsScreen = () => {
  const weeklyExpense = getRandomNumber(1000, 10000);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Weekly Expenses</Text>
        <Text style={styles.weeklyExpenseText}>
          <WalletBalanceText balance={weeklyExpense} />
        </Text>
      </View>
      <View style={styles.chartContainer}></View>
      <View style={styles.transactionsContainer}>
        <TransactionsList transactions={TRANSACTIONS} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    paddingTop: 20,
  },
  summaryContainer: {
    alignItems: 'center',
  },
  summaryText: {
    color: COLORS.dark.yellow,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  weeklyExpenseText: {
    color: COLORS.dark.text,
    fontSize: 50,
    fontWeight: '500',
    marginBottom: 30,
  },
  chartContainer: {},
  transactionsContainer: {},
});

export default StatisticsScreen;
