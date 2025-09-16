import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SendMoneyScreen = () => {
  return (
    <View>
      <Text>
        <Link href="/sending">Sending</Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SendMoneyScreen;
