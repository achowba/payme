import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { CONTACTS } from '@/data/contact.data';
import { IContact } from '@/types';
import { getRandomElementsFromArray } from '@/utils/array.utils';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { resolveSource } from '../../utils/assets.utils';

const ProfileScreen = () => {
  const user: IContact = getRandomElementsFromArray(CONTACTS, 1)[0];

  return (
    <View style={styles.container}>
      <View style={styles.profileInfoContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={resolveSource(user.photo)} />
        </View>
        <Text style={styles.nameText}>{user.firstName}</Text>
        <Text style={styles.emailText}>{user.email}</Text>
      </View>
      <View style={styles.settingsContainer}>
        <View style={styles.settingItemContainer}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="person" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Account</Text>
        </View>
        <View style={styles.settingItemContainer}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="person" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Password</Text>
        </View>
        <View style={styles.settingItemContainer}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="person" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Languages</Text>
        </View>
        <View style={styles.settingToggleContainer}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="person" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Notification</Text>
        </View>
        <View style={styles.settingToggleContainer}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="person" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Face ID</Text>
        </View>
        <View style={styles.settingItemContainer}>
          <View style={styles.settingIconContainer}>
            <Ionicons name="person" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>App Information</Text>
        </View>
      </View>
      <Pressable style={styles.signOutBtn} onPress={() => alert('Sign Out')}>
        <Text style={styles.signOutBtnText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    aspectRatio: 1,
    borderRadius: 50,
    marginBottom: 20,
    overflow: 'hidden',
    width: 90,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  nameText: {
    ...DEFAULT_STYLES.text,
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 8,
  },
  emailText: {
    ...DEFAULT_STYLES.text,
    color: '#AAAAAA',
    fontSize: 17,
  },
  settingsContainer: {
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    gap: 10,
    padding: 20,
  },
  settingItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 10,
  },
  settingIconContainer: {},
  settingText: {
    ...DEFAULT_STYLES.text,
  },
  settingToggleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 10,
  },
  signOutBtn: {
    alignItems: 'center',
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    marginTop: 30,
    padding: 15,
    paddingVertical: 20,
  },
  signOutBtnText: {
    color: COLORS.dark.yellow,
    fontSize: 18,
  },
});

export default ProfileScreen;
