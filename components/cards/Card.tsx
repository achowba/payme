import { WALLET_PATTERNS_BG } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { ICard } from '@/types';
import { splitCardNumber } from '@/utils/array.utils';
import { Image, ImageBackground } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
  cardDetails: ICard;
};

const Card = ({ cardDetails }: CardProps) => {
  const logoSource =
    cardDetails.provider === 'Mastercard'
      ? require(`@/assets/images/logos/mastercard.png`)
      : require(`@/assets/images/logos/visa.png`);
  const numberTexts = splitCardNumber(cardDetails.number);

  return (
    <View style={styles.container}>
      <ImageBackground source={WALLET_PATTERNS_BG} contentFit="cover">
        <View style={styles.cardContainer}>
          <View style={styles.expiryContainer}>
            <Text style={[DEFAULT_STYLES.text, styles.brandText]}>Payme</Text>
            <Text style={[DEFAULT_STYLES.text, styles.expiryText]}>{cardDetails.expiry}</Text>
          </View>
          <View>
            <View style={styles.holderNameContainer}>
              <Text style={[DEFAULT_STYLES.text, styles.holderNameText]}>
                {cardDetails.holderName}
              </Text>
            </View>
            <View style={styles.numberTextContainer}>
              <Text style={[DEFAULT_STYLES.text, styles.numberText]}>{numberTexts[0]}</Text>
              <Text style={[DEFAULT_STYLES.text, styles.numberText]}>{numberTexts[1]}</Text>
              <Text style={[DEFAULT_STYLES.text, styles.numberText]}>{numberTexts[2]}</Text>
              <Text style={[DEFAULT_STYLES.text, styles.numberText]}>{numberTexts[3]}</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Text style={[DEFAULT_STYLES.text, styles.categoryText]}>{cardDetails.category}</Text>
              <View style={styles.providerLogoContainer}>
                <Image style={styles.providerLogo} source={logoSource} />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.purple,
    borderRadius: 20,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  expiryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 30,
    fontWeight: '500',
  },
  expiryText: {
    fontSize: 18,
    fontWeight: '500',
  },
  holderNameContainer: {
    marginTop: 70,
    marginBottom: 15,
  },
  holderNameText: {
    fontSize: 18,
    fontWeight: '600',
  },
  numberTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  numberText: {
    fontSize: 26,
    fontWeight: '600',
  },
  categoryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
  providerLogoContainer: {
    aspectRatio: 1.6,
    width: 45,
  },
  providerLogo: {
    height: '100%',
    width: '100%',
  },
});

export default Card;
