import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { useSelectContact } from '@/hooks/useContactSelect';
import { IContact } from '@/types';
import { FontAwesome6 } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

type SendMoneyContactProps = {
  index: number;
  contact: IContact;
};

const SendMoneyContactItem = ({ contact, index }: SendMoneyContactProps) => {
  const { selectedContact, setSelectedContact } = useSelectContact();

  const isSelected = selectedContact?.id === contact.id;
  const lastNameInitial = contact.lastName ? contact.lastName.charAt(0).toUpperCase() : '';
  const source = typeof contact.photo === 'string' ? { uri: contact.photo } : contact.photo;

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && DEFAULT_STYLES.pressed]}
      onPress={() => setSelectedContact(contact)}
    >
      <Animated.View entering={FadeIn.duration(400).delay(index * 100)}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={source} />
          {isSelected && (
            <View style={styles.selectedOverlay}>
              <FontAwesome6 name="check" size={35} color="#FFFFFF" />
            </View>
          )}
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
    borderRadius: 100,
    width: '100%',
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: `${COLORS.dark.purple}CD`,
    borderRadius: 100,
    justifyContent: 'center',
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SendMoneyContactItem;
