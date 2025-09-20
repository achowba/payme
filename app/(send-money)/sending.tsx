import { useSelectContact } from '@/hooks/useContactSelect';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SendingMoneyScreen = () => {
  const { selectedContact } = useSelectContact();


  return (
    <View>
      <Text>Sending Money to {selectedContact?.firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SendingMoneyScreen;
