import Header from '@/components/home/Header';
import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function HomeLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ header: () => <Header /> }} />
      <Stack.Screen name="select-contact" />
      <Stack.Screen name="send-money" />
      <Stack.Screen name="sending" />
    </Stack>
  );
}
