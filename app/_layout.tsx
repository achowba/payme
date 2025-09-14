import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors.constants';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const RootLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.dark.primary, paddingTop: insets.top }}>
      <StatusBar style="light" />
      <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }} />
    </View>
  );
};

export default RootLayout;
