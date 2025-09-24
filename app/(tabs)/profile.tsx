import ProfileInfo from '@/components/profile/ProfileInfo';
import SettingsItemWithIcon from '@/components/profile/SettingsItemWithIcon';
import SettingsItemWithImage from '@/components/profile/SettingsItemWithImage';
import ToggleButton from '@/components/ui/ToggleButton';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { CONTACTS } from '@/data/contact.data';
import { IContact } from '@/types';
import { getRandomElementsFromArray } from '@/utils/array.utils';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  const user: IContact = getRandomElementsFromArray(CONTACTS, 1)[0]; // Simulated user data

  const [isFaceIDEnabled, setIsFaceIDEnabled] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const toggleFaceIDSwitch = () => setIsFaceIDEnabled(!isFaceIDEnabled);
  const toggleNotificationSwitch = () => setIsNotificationEnabled(!isNotificationEnabled);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileInfo user={user} />
      <View style={styles.settingsContainer}>
        <SettingsItemWithIcon
          title="Account"
          iconType="MaterialCommunityIcons"
          iconName="account-edit-outline"
        />
        <SettingsItemWithIcon title="Password" iconType="Octicons" iconName="key" iconSize={20} />
        <SettingsItemWithImage
          title="Languages"
          imageSource={require('@/assets/images/icons/translation.png')}
        />
        <View style={styles.settingToggleContainer}>
          <SettingsItemWithIcon
            title="Notification"
            iconType="Ionicons"
            iconName="notifications-outline"
            iconSize={24}
          />
          <ToggleButton isOn={isNotificationEnabled} onToggle={toggleNotificationSwitch} />
        </View>
        <View style={styles.settingToggleContainer}>
          <SettingsItemWithImage
            title="Face ID"
            imageSource={require('@/assets/images/icons/face-id.png')}
            imageStyle={{ width: 25 }}
          />
          <ToggleButton isOn={isFaceIDEnabled} onToggle={toggleFaceIDSwitch} />
        </View>
        <SettingsItemWithIcon
          title="App Information"
          iconType="AntDesign"
          iconName="info-circle"
          iconSize={24}
          iconStyle={{ transform: [{ rotate: '180deg' }] }}
        />
      </View>
      <Pressable
        style={({ pressed }) => [styles.signOutBtn, pressed && DEFAULT_STYLES.pressed]}
        onPress={() => alert('You signed Out')}
      >
        <Text style={styles.signOutBtnText}>Sign Out</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  settingsContainer: {
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    gap: 20,
    padding: 20,
  },
  settingToggleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
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
