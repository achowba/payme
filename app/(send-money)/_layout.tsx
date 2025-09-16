import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const SendMoneyLayout = () => {
  const router = useRouter();

  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={30} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="set-amount" />
      <Stack.Screen name="sending" />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default SendMoneyLayout;
