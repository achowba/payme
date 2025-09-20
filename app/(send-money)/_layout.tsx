import SendMoneyScreenHeader from '@/components/send-money/Header';
import { COLORS } from '@/constants/colors.constants';
import { SelectContactProvider } from '@/store/SelectContactContext';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const SendMoneyLayout = () => {
  const router = useRouter();

  return (
    <SelectContactProvider>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: true,
          contentStyle: {
            backgroundColor: COLORS.dark.primary,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => <SendMoneyScreenHeader pageTitle="Send" />,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={30} />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="set-amount"
          options={{
            header: () => <SendMoneyScreenHeader pageTitle="Send" />,
          }}
        />
        <Stack.Screen name="sending" />
      </Stack>
    </SelectContactProvider>
  );
};

const styles = StyleSheet.create({});

export default SendMoneyLayout;
