import { DEFAULT_STYLES } from '@/constants/styles.constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { Text, TextStyle, View } from 'react-native';

type SettingsItemWithIconProps = {
  title: string;
  iconType: 'AntDesign' | 'Ionicons' | 'MaterialCommunityIcons' | 'Octicons';
  iconName:
    | keyof typeof AntDesign.glyphMap
    | keyof typeof Ionicons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof Octicons.glyphMap;
  iconSize?: number;
  iconStyle?: TextStyle;
};

const IconComponentMap = {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
};

const SettingsItemWithIcon = ({
  title,
  iconType,
  iconName,
  iconSize,
  iconStyle,
}: SettingsItemWithIconProps) => {
  const IconComponent = iconType ? IconComponentMap[iconType] : undefined;

  if (!IconComponent) {
    console.error(`Icon type "${iconType}" is not supported.`);
    return null;
  }

  return (
    <View style={DEFAULT_STYLES.settingItemContainer}>
      <View style={DEFAULT_STYLES.settingIconContainer}>
        <IconComponent
          name={iconName as any}
          size={iconSize ?? 26}
          style={iconStyle}
          color="#FFFFFF"
        />
      </View>
      <Text style={DEFAULT_STYLES.settingText}>{title}</Text>
    </View>
  );
};

export default SettingsItemWithIcon;
