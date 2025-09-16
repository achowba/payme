import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SelectContact = () => {
  return (
    <View>
      <Text>
        <Link href="/set-amount">Set Amount</Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectContact;
