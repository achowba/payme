import ToggleButton from '@/components/ui/ToggleButton';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { CONTACTS } from '@/data/contact.data';
import { IContact } from '@/types';
import { getRandomElementsFromArray } from '@/utils/array.utils';
import { AntDesign, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { resolveSource } from '../../utils/assets.utils';

const ProfileScreen = () => {
  const user: IContact = getRandomElementsFromArray(CONTACTS, 1)[0];

  const [isFaceIDEnabled, setIsFaceIDEnabled] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const toggleFaceIDSwitch = () => setIsFaceIDEnabled(!isFaceIDEnabled);
  const toggleNotificationSwitch = () => setIsNotificationEnabled(!isNotificationEnabled);

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
            <MaterialCommunityIcons name="account-edit-outline" size={26} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Account</Text>
        </View>
        <View style={styles.settingItemContainer}>
          <View style={styles.settingIconContainer}>
            <Octicons name="key" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Password</Text>
        </View>
        <View style={styles.settingItemContainer}>
          <View style={styles.settingIconContainer}>
            <Image
              style={styles.settingImage}
              source={require('@/assets/images/icons/translation.png')}
            />
          </View>
          <Text style={styles.settingText}>Languages</Text>
        </View>
        <View style={[styles.settingItemContainer, styles.settingToggleContainer]}>
          <View style={styles.settingItemContainer}>
            <View style={styles.settingIconContainer}>
              <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.settingText}>Notification</Text>
          </View>
          <ToggleButton isOn={isNotificationEnabled} onToggle={toggleNotificationSwitch} />
        </View>
        <View style={[styles.settingItemContainer, styles.settingToggleContainer]}>
          <View style={styles.settingItemContainer}>
            <View style={styles.settingIconContainer}>
              <Image
                style={[styles.settingImage, { width: 25 }]}
                source={require('@/assets/images/icons/face-id.png')}
              />
            </View>
            <Text style={styles.settingText}>Face ID</Text>
          </View>
          <ToggleButton isOn={isFaceIDEnabled} onToggle={toggleFaceIDSwitch} />
        </View>
        <View style={styles.settingItemContainer}>
          <View style={styles.settingIconContainer}>
            <AntDesign
              style={{ transform: [{ rotate: '180deg' }] }}
              name="info-circle"
              size={24}
              color="#FFFFFF"
            />
          </View>
          <Text style={styles.settingText}>App Information</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [styles.signOutBtn, pressed && DEFAULT_STYLES.pressed]}
        onPress={() => alert('You signed Out')}
      >
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
    gap: 20,
    padding: 20,
  },
  settingItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  settingIconContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#343434',
    borderRadius: 100,
    justifyContent: 'center',
    width: 42,
    padding: 0,
  },
  settingImage: {
    aspectRatio: 1,
    width: 20,
  },
  settingText: {
    ...DEFAULT_STYLES.text,
    fontSize: 22,
    fontWeight: '500',
  },
  settingToggleContainer: {
    justifyContent: 'space-between',
  },
  signOutBtn: {
    alignItems: 'center',
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    marginTop: 20,
    padding: 15,
    paddingVertical: 22,
  },
  signOutBtnText: {
    color: COLORS.dark.yellow,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ProfileScreen;
