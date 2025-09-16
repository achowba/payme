import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import QuickActionButton from './QuickActionButton';

const QuickActions = () => {
  const router = useRouter();

  return (
    <View style={styles.actionsContainer}>
      <QuickActionButton actionName="Top Up" isPrimary>
        <Ionicons name="add" size={40} color="#000000" />
      </QuickActionButton>
      <QuickActionButton actionName="Send" onPress={() => router.push('/(send-money)')}>
        <Image style={styles.image} source={require('@/assets/images/icons/send-money.png')} />
      </QuickActionButton>
      <QuickActionButton actionName="Receive">
        <Image style={styles.image} source={require('@/assets/images/icons/receive-money.png')} />
      </QuickActionButton>
      <QuickActionButton actionName="Scan">
        <Ionicons name="scan-outline" size={40} color="#FFFFFF" />
      </QuickActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  image: {
    aspectRatio: 1,
    width: '50%',
  },
});

export default QuickActions;
