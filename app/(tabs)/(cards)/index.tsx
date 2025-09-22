import Card from '@/components/cards/Card';
import WalletBalanceText from '@/components/home/WalletBalanceText';
import { COLORS } from '@/constants/colors.constants';
import { CARD } from '@/data/card.data';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const CardDetailsScreen = () => {
  const router = useRouter();

  const onAddNewCard = () => {
    router.push('/(tabs)/(cards)/add-card');
  };

  return (
    <View style={styles.container}>
      <View style={styles.walletContainer}>
        <Text style={styles.balanceLabelText}>Wallet Balance</Text>
        <WalletBalanceText />
        <Animated.View style={styles.cardDetailsContainer} entering={FadeInDown.duration(200)}>
          <Card cardDetails={CARD} />
        </Animated.View>
      </View>
      <View style={styles.addCardBtnContainer}>
        <Pressable style={styles.addCardBtn} onPress={onAddNewCard}>
          <Ionicons name="add" size={25} color={COLORS.dark.yellow} />
          <Text style={styles.addCardBtnText}>Add New Card</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  walletContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    marginTop: 20,
    padding: 8,
    paddingTop: 25,
  },
  balanceLabelText: {
    color: COLORS.dark.yellow,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
  },
  cardDetailsContainer: {
    marginTop: 25,
    width: '100%',
  },
  addCardBtnContainer: {
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },
  addCardBtn: {
    alignItems: 'center',
    borderColor: COLORS.dark.yellow,
    borderRadius: 25,
    borderStyle: 'dashed',
    borderWidth: 2,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 20,
    width: '100%',
  },
  addCardBtnText: {
    color: COLORS.dark.yellow,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CardDetailsScreen;
