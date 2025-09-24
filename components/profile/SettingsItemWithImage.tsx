import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { Image, ImageStyle } from 'expo-image';
import React from 'react';
import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type SettingsItemWithImageProps = {
  title: string;
  imageSource: ImageSourcePropType;
  imageStyle?: ImageStyle;
};

const SettingsItemWithImage = ({ title, imageSource, imageStyle }: SettingsItemWithImageProps) => {
  return (
    <View style={DEFAULT_STYLES.settingItemContainer}>
      <View style={DEFAULT_STYLES.settingIconContainer}>
        <Image style={[styles.settingImage, imageStyle]} source={imageSource} />
      </View>
      <Text style={DEFAULT_STYLES.settingText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingImage: {
    aspectRatio: 1,
    width: 20,
  },
});

export default SettingsItemWithImage;
