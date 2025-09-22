import ScreenHeader from '@/components/ui/ScreenHeader';
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
          contentStyle: styles.content,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => <ScreenHeader pageTitle="Send" />,
          }}
        />
        <Stack.Screen
          name="set-amount"
          options={{
            header: () => <ScreenHeader pageTitle="Send" />,
          }}
        />
        <Stack.Screen
          name="sending"
          options={{
            header: () => <ScreenHeader pageTitle="Sending" />,
          }}
        />
      </Stack>
    </SelectContactProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.dark.primary,
  },
});

export default SendMoneyLayout;
