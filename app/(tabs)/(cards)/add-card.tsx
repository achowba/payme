import NewCardItem from '@/components/cards/NewCardItem';
import { CARD_TYPES } from '@/data/card.data';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const AddCardScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cardTypesContainer}>
        {CARD_TYPES.map((cardType) => (
          <NewCardItem key={cardType.id} cardType={cardType} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  cardTypesContainer: {
    gap: 15,
    marginBottom: 30,
  },
});

export default AddCardScreen;
