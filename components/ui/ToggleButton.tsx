import { COLORS } from '@/constants/colors.constants';
import React from 'react';
import { StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

type ToggleButtonProps = {
  isOn: boolean;
  onToggle: () => void;
};

const ToggleButton = ({ isOn, onToggle }: ToggleButtonProps) => {
  return (
    <ToggleSwitch
      isOn={isOn}
      onToggle={onToggle!}
      onColor={COLORS.dark.toggle.on}
      offColor={COLORS.dark.toggle.off}
      trackOnStyle={styles.toggleTrack}
      trackOffStyle={styles.toggleTrack}
      thumbOffStyle={styles.toggleThumb}
      thumbOnStyle={styles.toggleThumb}
    />
  );
};

const styles = StyleSheet.create({
  toggleTrack: {
    padding: 16,
    paddingHorizontal: 27,
  },
  toggleThumb: {
    borderRadius: 25,
    height: 22,
    width: 22,
  },
});

export default ToggleButton;
