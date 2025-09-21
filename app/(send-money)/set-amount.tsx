import WalletBalanceText from '@/components/home/WalletBalanceText';
import { NumericKeypad } from '@/components/ui/NumericKeypad';
import { WALLET_PATTERNS_BG } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { useSelectContact } from '@/hooks/useContactSelect';
import { resolveSource } from '@/utils/assets.utils';
import { sanitizeAmount } from '@/utils/number.utils';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SetAmountScreen = () => {
  const router = useRouter();

  const [amount, setAmount] = useState('');
  const { selectedContact } = useSelectContact();

  const changeContact = () => {
    router.back();
  };

  const handleNumPadPress = (digit: string) => {
    if (digit === 'delete') {
      setAmount((prev: string) => prev.slice(0, -1));
      return;
    }

    setAmount((prev: string) => {
      return sanitizeAmount(prev, digit);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.infoContainer}>
          <ImageBackground style={styles.balanceContainer} source={WALLET_PATTERNS_BG}>
            <Text style={[styles.text, styles.balanceLabelText]}>Wallet Balance</Text>
            <WalletBalanceText balance={12890.0} />
          </ImageBackground>
          <View style={styles.selectedContactContainer}>
            <View style={styles.selectedContactInfoContainer}>
              <View style={styles.imageContainer}>
                <Image source={resolveSource(selectedContact?.photo)} style={styles.image} />
              </View>
              <View>
                <Text style={[styles.text, styles.selectedContactNameText]}>
                  {selectedContact?.firstName} {selectedContact?.lastName}
                </Text>
                <Text style={[styles.text, styles.selectedContactCardInfoText]}>
                  Payme - **** **** **** 9839
                </Text>
              </View>
            </View>
            <Pressable
              style={({ pressed }) => pressed && DEFAULT_STYLES.pressed}
              onPress={changeContact}
            >
              <Text style={styles.changeContactBtnText}>Change</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.amountInputContainer}>
          <Text style={styles.currencyText}>$</Text>
          <TextInput
            style={styles.amountInputField}
            value={amount}
            // onChangeText={handleAmountInputChange}
            keyboardType="number-pad"
            selectionColor={COLORS.dark.yellow}
          />
        </View>
        <View style={styles.numPadContainer}>
          <NumericKeypad onPress={handleNumPadPress} />
        </View>
      </View>
      <View style={styles.sendMoneyBtnContainer}>
        <Pressable
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
  infoContainer: {
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    marginBottom: 20,
    padding: 10,
  },
  balanceContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.dark.purple,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
  },
  text: {
    color: COLORS.dark.text,
  },
  balanceLabelText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  selectedContactContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  selectedContactInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  imageContainer: {
    aspectRatio: 1,
    width: 65,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 100,
    width: '100%',
  },
  selectedContactNameText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  selectedContactCardInfoText: {
    color: `${COLORS.dark.text}90`,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  changeContactBtnText: {
    color: COLORS.dark.yellow,
    fontSize: 16,
    fontWeight: '500',
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
