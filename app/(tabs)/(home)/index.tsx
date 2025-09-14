import QuickActions from '@/components/home/QuickActions';
import WalletDetailsContainer from '@/components/home/WalletDetailsContainer';
import { COLORS } from '@/constants/colors.constants';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <WalletDetailsContainer cardExpiry="02 / 25" walletBalance={12890.00} />
        <QuickActions />
      </View>
      <Link href="/(tabs)/(home)/select-contact">Select Contact</Link>
      <Link href="/(tabs)/(home)/send-money">Send Money</Link>
      <Link href="/(tabs)/(home)/sending">Sending</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.primary,
    flex: 1,
  },
  heroContainer: {
    backgroundColor: '#222222',
    borderRadius: 30,
    marginBottom: 40,
    padding: 10,
  },
});

export default HomeScreen;
