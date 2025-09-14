import { COLORS } from '@/constants/colors.constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type TabBarIconProps = {
  focused: boolean;
  children: React.ReactNode;
};

const TabBarIcon = ({ focused, children }: TabBarIconProps) => {
  return <View style={[styles.container, focused && styles.focused]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {},
  focused: {
    alignItems: 'center',
    backgroundColor: COLORS.dark.purple,
    borderRadius: 40,
    height: 70,
    justifyContent: 'center',
    padding: 20,
    width: 90,
  },
});

export default TabBarIcon;
