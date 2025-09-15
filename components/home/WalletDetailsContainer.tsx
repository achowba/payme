import { ASSETS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { Image, ImageBackground } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedRollingNumber } from 'react-native-animated-rolling-numbers';
import { Easing } from 'react-native-reanimated';

type WalletDetailsContainerProps = {
  cardExpiry: string;
  walletBalance: number;
};

const WalletDetailsContainer = ({ cardExpiry, walletBalance }: WalletDetailsContainerProps) => {
  const [balanceLarge, balanceSmall] = walletBalance.toFixed(2).split('.');

  return (
    <View style={styles.container}>
      <ImageBackground source={ASSETS.backgrounds.triangles} contentFit="cover">
        <View style={styles.walletDetailsContainer}>
          <View style={styles.cardExpiryContainer}>
            <Text style={[styles.text, styles.walletBalanceText]}>Wallet Balance</Text>
            <Text style={[styles.text, styles.cardExpiryText]}>{cardExpiry}</Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={[styles.text, styles.balanceTextLarge]}>$</Text>
            <AnimatedRollingNumber
              value={parseInt(balanceLarge)}
              useGrouping
              textStyle={[styles.text, styles.balanceTextLarge]}
              spinningAnimationConfig={{ duration: 1500, easing: Easing.bounce }}
            />
            <Text style={[styles.text, styles.balanceTextSmall]}>.{balanceSmall}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#703EDD',
    borderRadius: 20,
    marginBottom: 20,
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
