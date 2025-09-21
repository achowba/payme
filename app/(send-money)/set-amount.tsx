import TransferInfo from '@/components/send-money/TransferInfo';
import ButtonPrimary from '@/components/ui/ButtonPrimary';
import { NumericKeypad } from '@/components/ui/NumericKeypad';
import { COLORS } from '@/constants/colors.constants';
import { WALLET_BALANCE } from '@/constants/money.constants';
import { useSelectContact } from '@/hooks/useContactSelect';
import { sanitizeAmount } from '@/utils/number.utils';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeInDown, SlideInDown } from 'react-native-reanimated';

const SetAmountScreen = () => {
  const router = useRouter();

  const [amount, setAmount] = useState('');
  const { selectedContact } = useSelectContact();

  const onNumericKeypadPress = (digit: string) => {
    if (digit === 'delete') {
      setAmount((prev: string) => prev.slice(0, -1));
      return;
    }

    setAmount((prev: string) => {
      return sanitizeAmount(prev, digit);
    });
  };

  const onSendMoney = () => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid amount greater than zero.');
      return;
    }

    if (numericAmount > WALLET_BALANCE) {
      alert('Insufficient wallet balance.');
      return;
    }

    router.push(`/sending?amount=${numericAmount}`);
  };

  return (
    <View style={styles.container}>
      <View>
        <TransferInfo selectedContact={selectedContact} showChangeBtn />
        <View style={styles.amountInputContainer}>
          <Text style={styles.currencyText}>$</Text>
          <TextInput
            style={styles.amountInputField}
            value={amount}
            keyboardType="number-pad"
            selectionColor={COLORS.dark.yellow}
          />
        </View>
        <View style={styles.numPadContainer}>
          <NumericKeypad onPress={onNumericKeypadPress} />
        </View>
      </View>
      <Animated.View
        style={styles.sendMoneyBtnContainer}
        entering={FadeInDown.duration(300).delay(500)}
        exiting={SlideInDown.duration(300).delay(500)}
      >
        <ButtonPrimary onPress={onSendMoney}>Send Money</ButtonPrimary>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  amountInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 35,
    paddingTop: 5,
  },
  currencyText: {
    color: `#707070`,
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
  },
  amountInputField: {
    color: COLORS.dark.text,
    fontSize: 50,
    fontWeight: '600',
  },
  numPadContainer: {
    paddingTop: 10,
  },
  sendMoneyBtnContainer: {
    alignItems: 'center',
    bottom: 10,
    left: 0,
    padding: 10,
    position: 'absolute',
    right: 0,
  },
});

export default SetAmountScreen;
