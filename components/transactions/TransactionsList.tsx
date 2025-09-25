import { ITransaction } from '@/types';
import { getRandomElementsFromArray } from '@/utils/array.utils';
import React from 'react';
import { FlatList } from 'react-native';
import TransactionItem from './TransactionItem';

type TransactionsListProps = {
  transactions: ITransaction[];
  maximumTransactionsToShow?: number;
};

const TransactionsList = ({
  transactions,
  maximumTransactionsToShow = 0,
}: TransactionsListProps) => {
  let filteredTransactions = getRandomElementsFromArray(transactions, maximumTransactionsToShow);

  const renderTransactionItem = ({ item }: { item: ITransaction }) => {
    return <TransactionItem transaction={item} />;
  };

  return (
    <FlatList
      data={filteredTransactions}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={renderTransactionItem}
      nestedScrollEnabled
      scrollEnabled={false}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TransactionsList;
