import { StyleSheet } from "react-native";
import { COLORS } from "./colors.constants";

export const DEFAULT_STYLES = StyleSheet.create({
  pressed: {
    opacity: 0.7
  },
  text: {
    color: COLORS.dark.text
  },
  transferTextContainer: {
    alignItems: 'center',
  },
  transferStatusLabelText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },
  transferStatusDescriptionText: {
    color: '#797979',
    fontSize: 16,
    fontWeight: '400',
  },
  transferIconContainer: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    marginBottom: 40,
    width: 120,
  }
});
