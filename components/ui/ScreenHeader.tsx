import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ScreenHeaderProps = {
  pageTitle: string;
  onBackPress?: () => void;
  showBackBtn?: boolean;
  showOptionsBtn?: boolean;
};

const ScreenHeader = ({
  pageTitle,
  onBackPress,
  showBackBtn = true,
  showOptionsBtn = true,
}: ScreenHeaderProps) => {
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
      <Pressable
        style={({ pressed }) => [
          styles.headerIconContainer,
          !showBackBtn && styles.hiddenBtn,
          pressed && DEFAULT_STYLES.pressed,
        ]}
        onPress={onBack}
      >
        <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
      </Pressable>
      <Text style={styles.headerTitleText}>{pageTitle}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.headerIconContainer,
          !showOptionsBtn && styles.hiddenBtn,
          pressed && DEFAULT_STYLES.pressed,
        ]}
      >
        <Ionicons name="ellipsis-vertical" size={20} color="#FFFFFF" />
      </Pressable>
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
    alignContent: 'center',
  },
  headerTitleText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '600',
  },
  hiddenBtn: {
    opacity: 0,
  },
});

export default ScreenHeader;
