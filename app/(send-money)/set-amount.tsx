import TransferInfo from '@/components/send-money/TransferInfo';
import { NumericKeypad } from '@/components/ui/NumericKeypad';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { useSelectContact } from '@/hooks/useContactSelect';
import { sanitizeAmount } from '@/utils/number.utils';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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

    router.push('/sending');
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
      <View style={styles.sendMoneyBtnContainer}>
        <Pressable
          onPress={onSendMoney}
          style={({ pressed }) => [styles.sendMoneyBtn, pressed && DEFAULT_STYLES.pressed]}
        >
          <Text style={styles.sendMoneyBtnText}>Send Money</Text>
        </Pressable>
      </View>
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
  sendMoneyBtn: {
    backgroundColor: COLORS.dark.purple,
    borderRadius: 100,
    padding: 30,
    textAlign: 'center',
    width: '100%',
  },
  sendMoneyBtnText: {
    color: COLORS.dark.text,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SetAmountScreen;
