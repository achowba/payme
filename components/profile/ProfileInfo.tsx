import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { IContact } from '@/types';
import { resolveSource } from '@/utils/assets.utils';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import Loader from '../ui/Loader';

type ProfileInfoProps = {
  user: IContact;
};

const ProfileInfo = ({ user }: ProfileInfoProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading delay
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Loader />
      </View>
    );
  }

  return (
    <Animated.View style={styles.profileInfoContainer} entering={FadeInUp.duration(200)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={resolveSource(user.photo)} />
      </View>
      <Text style={styles.nameText}>{user.firstName}</Text>
      <Text style={styles.emailText}>{user.email}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    height: 150,
    justifyContent: 'center',
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
});

export default ProfileInfo;
