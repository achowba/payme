import { COLORS } from "@/constants/colors.constants";
import { getRandomNumber } from "@/utils/number.utils";
import { barDataItem } from "react-native-gifted-charts";

const spacing = 4;
const labelWidth = 30;
const labelTextStyle = {
  color: COLORS.dark.text,
  marginTop: 2,
};

export const WEEKLY_TRANSACTIONS_BAR_DATA: barDataItem[] = [
  {
    value: getRandomNumber(50, 60),
    label: 'Mon',
    spacing,
    labelWidth,
    labelTextStyle,
    frontColor: COLORS.dark.yellow,
  },
  {
    value: getRandomNumber(80, 90),
    frontColor: COLORS.dark.purple
  },
  {
    value: getRandomNumber(20, 30),
    label: 'Tue',
    spacing,
    labelWidth,
    labelTextStyle,
    frontColor: COLORS.dark.yellow,
  },
  {
    value: getRandomNumber(60, 70),
    frontColor: COLORS.dark.purple
  },
  {
    value: getRandomNumber(60, 70),
    label: 'Wed',
    spacing,
    labelWidth,
    labelTextStyle,
    frontColor: COLORS.dark.yellow,
  },
  {
    value: getRandomNumber(40, 50),
    frontColor: COLORS.dark.purple
  },
  {
    value: getRandomNumber(40, 50),
    label: 'Thu',
    spacing,
    labelWidth,
    labelTextStyle,
    frontColor: COLORS.dark.yellow,
  },
  {
    value: getRandomNumber(70, 85),
    frontColor: COLORS.dark.purple
  },
  {
    value: getRandomNumber(25, 30),
    label: 'Fri',
    spacing,
    labelWidth,
    labelTextStyle,
    frontColor: COLORS.dark.yellow,
  },
  {
    value: getRandomNumber(95, 100),
    frontColor: COLORS.dark.purple
  },
  {
    value: getRandomNumber(80, 85),
    label: 'Sat',
    spacing,
    labelWidth,
    labelTextStyle,
    frontColor: COLORS.dark.yellow,
  },
  {
    value: getRandomNumber(15, 20),
    frontColor: COLORS.dark.purple
  },
  {
    value: getRandomNumber(15, 20),
    label: 'Sun',
    spacing,
    labelWidth,
    labelTextStyle,
    frontColor: COLORS.dark.yellow,
  },
  {
    value: getRandomNumber(40, 50),
    frontColor: COLORS.dark.purple
  },
];
