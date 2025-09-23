import NewCardItem from '@/components/cards/NewCardItem';
import { CARD_TYPES } from '@/data/card.data';
import { shuffleArray } from '@/utils/array.utils';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const AddCardScreen = () => {
  const suffledCardTypes = shuffleArray(CARD_TYPES);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cardTypesContainer}>
        {suffledCardTypes.map((cardType) => (
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
