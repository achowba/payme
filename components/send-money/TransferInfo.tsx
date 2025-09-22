import { WALLET_PATTERNS_BG } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { WALLET_BALANCE } from '@/constants/money.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { IContact } from '@/types';
import { resolveSource } from '@/utils/assets.utils';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import WalletBalanceText from '../home/WalletBalanceText';

type TransferInfoProps = {
  selectedContact: IContact | null;
  showChangeBtn?: boolean;
  walletBalance?: number;
  initialDisplayValue?: number;
};

const TransferInfo = ({
  selectedContact,
  showChangeBtn = false,
  initialDisplayValue,
  walletBalance = WALLET_BALANCE,
}: TransferInfoProps) => {
  const router = useRouter();

  const onChangeContact = () => {
    router.back();
  };

  return (
    <View style={styles.infoContainer}>
      <View style={styles.backgroundContainer}>
        <ImageBackground style={styles.balanceContainer} source={WALLET_PATTERNS_BG}>
          <Text style={[styles.text, styles.balanceLabelText]}>Wallet Balance</Text>
          <WalletBalanceText balance={walletBalance} initialDisplayValue={initialDisplayValue} />
        </ImageBackground>
      </View>
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
        {showChangeBtn && (
          <Pressable
            style={({ pressed }) => pressed && DEFAULT_STYLES.pressed}
            onPress={onChangeContact}
          >
            <Text style={styles.changeContactBtnText}>Change</Text>
          </Pressable>
        )}
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
  backgroundContainer: {
    overflow: 'hidden',
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
});

export default TransferInfo;
