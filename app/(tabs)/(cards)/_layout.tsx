import ScreenHeader from '@/components/ui/ScreenHeader';
import { COLORS } from '@/constants/colors.constants';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const CardsLayout = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ headerShown: true, contentStyle: styles.content }}
    >
      <Stack.Screen
        name="index"
        options={{ header: () => <ScreenHeader pageTitle="Card Details" showBackBtn={false} /> }}
      />
      <Stack.Screen
        name="add-card"
        options={{ header: () => <ScreenHeader pageTitle="Add Card" /> }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.dark.primary,
  },
});

export default CardsLayout;
