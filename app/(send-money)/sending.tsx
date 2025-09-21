import TransferInfo from '@/components/send-money/TransferInfo';
import TransferSending from '@/components/send-money/TransferSending';
import TransferSent from '@/components/send-money/TransferSent';
import ButtonPrimary from '@/components/ui/ButtonPrimary';
import { WALLET_BALANCE } from '@/constants/money.constants';
import { useSelectContact } from '@/hooks/useContactSelect';
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeInDown, SlideInDown } from 'react-native-reanimated';

const SendingMoneyScreen = () => {
  const router = useRouter();

  const { selectedContact } = useSelectContact();
  const { amount } = useLocalSearchParams<{ amount: string }>();

  const [isMoneySent, setIsMoneySent] = useState(false);

  const sendMoney = async () => {
    console.log('Sending Money...');

    setTimeout(() => {
      console.log('Money Sent');
      setIsMoneySent(true);
    }, 2000);
  };

  const onBackToHome = () => {
    router.dismissTo('/(tabs)');
  };

  useFocusEffect(() => {
    sendMoney();
  });

  const parsedAmount = parseFloat(amount || '0');
  const updatedWalletBalance = isNaN(parsedAmount) ? 0 : WALLET_BALANCE - parsedAmount;

  return (
    <View style={styles.container}>
      <TransferInfo
        selectedContact={selectedContact}
        walletBalance={updatedWalletBalance}
        initialDisplayValue={WALLET_BALANCE}
      />
      <View style={styles.statusContainer}>
        {isMoneySent ? <TransferSent contact={selectedContact} /> : <TransferSending />}
      </View>
      {isMoneySent && (
        <Animated.View
          style={styles.backHomeBtnContainer}
          entering={FadeInDown.duration(300).delay(500)}
          exiting={SlideInDown.duration(300).delay(500)}
        >
          <ButtonPrimary onPress={onBackToHome}>Back to Home</ButtonPrimary>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  backHomeBtnContainer: {
    alignItems: 'center',
    bottom: 10,
    left: 0,
    padding: 10,
    position: 'absolute',
    right: 0,
  },
});

export default SendingMoneyScreen;
