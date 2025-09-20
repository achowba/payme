import QuickActions from '@/components/home/QuickActions';
import WalletDetailsContainer from '@/components/home/WalletDetailsContainer';
import TransactionsList from '@/components/transactions/TransactionsList';
import { COLORS } from '@/constants/colors.constants';
import { TRANSACTIONS } from '@/data/transactions.data';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <WalletDetailsContainer cardExpiry="02 / 25" balance={12890} />
        <QuickActions />
      </View>
      <View style={styles.transactionsContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitleText}>Transactions</Text>
          <Link href="/(tabs)/statistics" asChild>
            <Text style={styles.seeAllText}>See all</Text>
          </Link>
        </View>
        <TransactionsList transactions={TRANSACTIONS} maximumTransactionsToShow={10} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.primary,
    flex: 1,
  },
  heroContainer: {
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    marginBottom: 40,
    padding: 10,
  },
  transactionsContainer: {},
  sectionTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  sectionTitleText: {
    color: COLORS.dark.text,
    fontSize: 28,
    fontWeight: '600',
  },
  seeAllText: {
    color: COLORS.dark.yellow,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeScreen;
