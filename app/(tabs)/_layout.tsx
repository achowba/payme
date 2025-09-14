import { TabBarItems } from '@/components/ui/TabBarItems';
import { Tabs } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(home)',
};

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1F1F1F',
          borderTopColor: 'transparent',
          height: 100,
          paddingTop: 25,
        },
      }}
    >
      {TabBarItems}
    </Tabs>
  );
};

export default TabsLayout;
