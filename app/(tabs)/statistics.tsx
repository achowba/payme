import WalletBalanceText from '@/components/home/WalletBalanceText';
import Tooltip from '@/components/statistics/Tooltip';
import TransactionsList from '@/components/transactions/TransactionsList';
import { COLORS } from '@/constants/colors.constants';
import { WEEKLY_TRANSACTIONS_BAR_DATA } from '@/data/chart.data';
import { TRANSACTIONS } from '@/data/transactions.data';
import { getRandomElementsFromArray } from '@/utils/array.utils';
import { getRandomNumber } from '@/utils/number.utils';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const StatisticsScreen = () => {
  const weeklyExpense = getRandomNumber(1000, 10000);
  const weeklyTransactions = getRandomElementsFromArray(TRANSACTIONS, 10);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Weekly Expenses</Text>
        <Text style={styles.weeklyExpenseText}>
          <WalletBalanceText balance={weeklyExpense} />
        </Text>
      </View>
      <View style={styles.chartContainer}>
        <BarChart
          data={WEEKLY_TRANSACTIONS_BAR_DATA}
          disableScroll
          isAnimated
          animationDuration={1000}
          maxValue={110}
          hideAxesAndRules
          roundedTop
          roundedBottom
          barWidth={21}
          spacing={13}
          xAxisThickness={10}
          yAxisThickness={-30}
          noOfSections={3}
          autoCenterTooltip
          renderTooltip={(item: any) => <Tooltip value={item?.value} color={item?.frontColor} />}
        />
      </View>
      <View style={styles.transactionsContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitleText}>Transactions</Text>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>This Week</Text>
            <Ionicons name="chevron-down" size={16} color={COLORS.dark.text} />
          </View>
        </View>
        <TransactionsList transactions={weeklyTransactions} />
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
  },
  chartContainer: {
    marginBottom: 30,
  },
  transactionsContainer: {
    marginBottom: 20,
  },
  sectionTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  sectionTitleText: {
    color: COLORS.dark.text,
    fontSize: 28,
    fontWeight: '600',
  },
  durationContainer: {
    alignItems: 'center',
    backgroundColor: '#303030',
    borderRadius: 20,
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  durationText: {
    color: `${COLORS.dark.text}BB`,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default StatisticsScreen;
