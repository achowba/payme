import SendMoneyScreenHeader from '@/components/send-money/Header';
import { COLORS } from '@/constants/colors.constants';
import { SelectContactProvider } from '@/store/SelectContactContext';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

const SendMoneyLayout = () => {
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
          }}
        />
        <Stack.Screen
          name="set-amount"
          options={{
            header: () => <SendMoneyScreenHeader pageTitle="Send" />,
          }}
        />
        <Stack.Screen
          name="sending"
          options={{
            header: () => <SendMoneyScreenHeader pageTitle="Sending" />,
          }}
        />
      </Stack>
    </SelectContactProvider>
  );
};

const styles = StyleSheet.create({});

export default SendMoneyLayout;
