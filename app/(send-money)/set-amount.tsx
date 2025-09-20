import WalletBalanceText from '@/components/home/WalletBalanceText';
import { WALLET_PATTERNS_BG } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { useSelectContact } from '@/hooks/useContactSelect';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const SetAmountScreen = () => {
  const router = useRouter();

  const { selectedContact } = useSelectContact();

  const source =
    typeof selectedContact?.photo === 'string'
      ? { uri: selectedContact?.photo }
      : selectedContact?.photo;

  const changeContact = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <ImageBackground style={styles.balanceContainer} source={WALLET_PATTERNS_BG}>
          <Text style={[styles.text, styles.balanceLabelText]}>Wallet Balance</Text>
          <WalletBalanceText balance={12890.0} />
        </ImageBackground>
        <View style={styles.selectedContactContainer}>
          <View style={styles.selectedContactInfoContainer}>
            <View style={styles.imageContainer}>
              <Image source={source} style={styles.image} />
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

          <Pressable style={styles.changeContactBtn} onPress={changeContact}>
            <Text style={styles.changeContactBtnText}>Change</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  balanceTextContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  balanceTextLarge: {
    fontSize: 55,
    fontWeight: '600',
  },
  balanceTextSmall: {
    bottom: 5,
    fontSize: 25,
  },
  selectedContactContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
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
  changeContactBtn: {},
  changeContactBtnText: {
    color: COLORS.dark.yellow,
    fontSize: 16,
    fontWeight: '500',
  },
  amountInputContainer: {},
  amountInput: {},
  amountInputBtn: {},
  amountInputBtnText: {},
  sendMoneyBtn: {},
  sendMoneyBtnText: {},
});

export default SetAmountScreen;
