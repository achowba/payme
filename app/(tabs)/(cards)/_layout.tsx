import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const CardsLayout = () => {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="add-card" />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default CardsLayout;
