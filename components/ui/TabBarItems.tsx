import { COLORS } from '@/constants/colors.constants';
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import HomeScreenHeader from '../home/Header';
import TabBarIcon from './TabBarIcon';

export const TabBarItems = [
  <Tabs.Screen
    name="index"
    key="index"
    options={{
      header: () => <HomeScreenHeader />,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused}>
          <Octicons name="home" size={24} color={focused ? '#FFFFFF' : COLORS.dark.tab.inactive} />
        </TabBarIcon>
      ),
    }}
  />,
  <Tabs.Screen
    name="statistics"
    key="statistics"
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused}>
          <MaterialIcons
            name="insert-chart-outlined"
            size={30}
            color={focused ? '#FFFFFF' : COLORS.dark.tab.inactive}
          />
        </TabBarIcon>
      ),
    }}
  />,
  <Tabs.Screen
    name="(cards)"
    key="(cards)"
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused}>
          <Ionicons
            name="wallet-outline"
            size={26}
            color={focused ? '#FFFFFF' : COLORS.dark.tab.inactive}
          />
        </TabBarIcon>
      ),
    }}
  />,
  <Tabs.Screen
    name="profile"
    key="profile"
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused}>
          <MaterialIcons
            name="person-outline"
            size={30}
            color={focused ? '#FFFFFF' : COLORS.dark.tab.inactive}
          />
        </TabBarIcon>
      ),
    }}
  />,
];
