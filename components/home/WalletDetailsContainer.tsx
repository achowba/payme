import { WALLET_PATTERNS_BG } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { Image, ImageBackground } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import WalletBalanceText from './WalletBalanceText';

type WalletDetailsContainerProps = {
  cardExpiry: string;
  balance: number;
};

const WalletDetailsContainer = ({ cardExpiry, balance }: WalletDetailsContainerProps) => {
  return (
    <Animated.View style={styles.container} entering={FadeInDown.duration(200)}>
      <ImageBackground source={WALLET_PATTERNS_BG} contentFit="cover">
        <View style={styles.walletDetailsContainer}>
          <View style={styles.cardExpiryContainer}>
            <Text style={[styles.text, styles.walletBalanceText]}>Wallet Balance</Text>
            <Text style={[styles.text, styles.cardExpiryText]}>{cardExpiry}</Text>
          </View>
          <View style={styles.balanceContainer}>
            <WalletBalanceText
              balance={balance}
              balanceTextLargeStyle={styles.balanceTextLarge}
              balanceTextSmallStyle={styles.balanceTextSmall}
            />
          </View>
          <View style={styles.cardTypeContainer}>
            <Text style={[styles.text, styles.cardTypeText]}>Premium Card</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('@/assets/images/logos/mastercard.png')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#703EDD',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  walletDetailsContainer: {
    padding: 20,
  },
  cardExpiryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.dark.text,
    fontWeight: '500',
  },
  walletBalanceText: {
    fontSize: 17,
    fontWeight: '600',
  },
  cardExpiryText: {
    fontSize: 16,
  },
  balanceContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 45,
    marginTop: 15,
  },
  balanceTextLarge: {
    fontSize: 55,
    fontWeight: '600',
  },
  balanceTextSmall: {
    bottom: 5,
    fontSize: 30,
    fontWeight: '400',
  },
  cardTypeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTypeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    aspectRatio: 1.6,
    width: 40,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default WalletDetailsContainer;
