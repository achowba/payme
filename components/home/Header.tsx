import { COLORS } from '@/constants/colors.constants';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreenHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: 'https://avatar.iran.liara.run/public' }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Hi, Momon!</Text>
          <Text style={styles.emailText}>momon@hatypo.studio</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
        <View style={styles.notificationIndicator}></View>
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
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  imageContainer: {
    aspectRatio: 1,
    borderRadius: 100,
    width: 50,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
  },
  textContainer: {
    marginLeft: 5,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  emailText: {
    color: '#FFFFFF95',
    fontSize: 15,
    fontWeight: '400',
  },
  iconContainer: {
    backgroundColor: '#323232',
    borderRadius: 100,
    padding: 10,
  },
  notificationIndicator: {
    aspectRatio: 1,
    backgroundColor: '#EB3A6D',
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    top: 2,
    width: 10,
  },
});

export default HomeScreenHeader;
