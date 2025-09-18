import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { IContact } from '@/types';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

type SendMoneyContactProps = {
  index: number;
  contact: IContact;
};

const SendMoneyContactItem = ({ contact, index }: SendMoneyContactProps) => {
  const source = typeof contact.photo === 'string' ? { uri: contact.photo } : contact.photo;
  const lastNameInitial = contact.lastName ? contact.lastName.charAt(0).toUpperCase() : '';

  return (
    <Pressable style={({ pressed }) => [styles.container, pressed && DEFAULT_STYLES.pressed]}>
      <Animated.View entering={FadeIn.duration(400).delay(index * 100)}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={source} />
        </View>
        <Text style={styles.nameText}>
          {contact.firstName} {lastNameInitial}.
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
  },
  image: {
    aspectRatio: 1,
    marginBottom: 10,
    width: '100%',
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SendMoneyContactItem;
