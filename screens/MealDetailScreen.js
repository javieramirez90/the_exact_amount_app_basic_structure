import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
  const mealData = props.navigation.getParam('mealData');

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Text>{mealData.item.title}</Text>
      <Button title="Go Back to Categories" onPress={() => {
        props.navigation.popToTop();
      }}/>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealData = navigationData.navigation.getParam('mealData');

  return {
    headerTitle: mealData.item.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Added to favorites")}
        />
        <Item
          title="Favorite Outline"
          iconName="ios-star-outline"
          onPress={() => console.log("Added to favorites")}
        />
      </HeaderButtons>
      )
  };
};

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;