import { TabBarItems } from '@/components/ui/TabBarItems';
import { COLORS } from '@/constants/colors.constants';
import { Tabs } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1F1F1F',
          borderTopColor: 'transparent',
          height: 100,
          paddingTop: 25,
        },
        sceneStyle: {
          backgroundColor: COLORS.dark.primary,
        },
      }}
    >
      {TabBarItems}
    </Tabs>
  );
};

export default TabsLayout;
