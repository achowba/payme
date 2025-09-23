import { WALLET_PATTERNS_BG } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { ICardType } from '@/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageBackground } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import tinycolor from 'tinycolor2';

type NewCardItemProps = {
  cardType: ICardType;
};

const NewCardItem = ({ cardType }: NewCardItemProps) => {
  const isCardColorDark = tinycolor(cardType.color).isDark();

  return (
    <View style={styles.container}>
      <View style={[styles.backgroundContainer, { backgroundColor: cardType.color }]}>
        <ImageBackground
          style={styles.imageBackground}
          contentFit="cover"
          source={WALLET_PATTERNS_BG}
        >
          <View style={styles.brandContainer}>
            <Text
              style={[
                styles.brandText,
                { color: isCardColorDark ? COLORS.dark.text : COLORS.light.text },
              ]}
            >
              Payme
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsTextContainer}>
          <Text style={styles.titleText}>{cardType.title}</Text>
          <Text style={styles.descriptionText}>{cardType.description}</Text>
        </View>
        <Pressable style={({ pressed }) => [styles.addCardBtn, pressed && DEFAULT_STYLES.pressed]}>
          <MaterialCommunityIcons
            name="arrow-bottom-right"
            size={30}
            color={COLORS.dark.yellow}
            style={styles.icon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 20,
    gap: 25,
    padding: 8,
    paddingBottom: 20,
  },
  backgroundContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageBackground: {
    height: 120,
  },
  brandContainer: {
    padding: 20,
  },
  brandText: {
    fontSize: 27,
    fontWeight: '500',
  },
  detailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  detailsTextContainer: {
    gap: 8,
  },
  titleText: {
    color: COLORS.dark.text,
    fontSize: 24,
    fontWeight: '500',
  },
  descriptionText: {
    color: '#AAAAAA',
    fontSize: 17,
    fontWeight: '400',
  },
  addCardBtn: {
    alignItems: 'center',
    backgroundColor: '#282828',
    borderRadius: 22,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  icon: {
    transform: [{ rotate: '-45deg' }],
  },
});

export default NewCardItem;
