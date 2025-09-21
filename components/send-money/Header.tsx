import { COLORS } from '@/constants/colors.constants';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SendMoneyScreenHeaderProps = {
  pageTitle: string;
  onBackPress?: () => void;
};

const SendMoneyScreenHeader = ({ pageTitle, onBackPress }: SendMoneyScreenHeaderProps) => {
  const router = useRouter();

  const onBack = () => {
    if (onBackPress) {
      onBackPress();
      return;
    }

    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.headerIconContainer} onPress={onBack}>
        <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
      </Pressable>
      <Text style={styles.headerTitleText}>{pageTitle}</Text>
      <View style={styles.headerIconContainer}>
        <Ionicons name="ellipsis-vertical" size={20} color="#FFFFFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.dark.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 20,
  },
  headerIconContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#313131',
    borderRadius: 100,
    justifyContent: 'center',
    padding: 5,
    width: 50,
  },
  headerTitleText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '600',
  },
});

export default SendMoneyScreenHeader;
