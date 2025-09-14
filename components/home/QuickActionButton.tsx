import { COLORS } from '@/constants/colors.constants';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type QuickActionButtonProps = {
  children: React.ReactNode;
  actionName: string;
  isPrimary?: boolean;
  onPress?: () => void;
};

const QuickActionButton = ({
  actionName,
  children,
  isPrimary,
  onPress,
}: QuickActionButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress!}
    >
      <View style={[styles.childrenContainer, isPrimary && styles.primaryButton]}>{children}</View>
      <Text style={styles.actionNameText}>{actionName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  childrenContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#292929',
    borderRadius: 100,
    justifyContent: 'center',
    width: 90,
  },
  primaryButton: {
    backgroundColor: COLORS.dark.yellow,
  },
  actionNameText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
    marginTop: 15,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default QuickActionButton;
