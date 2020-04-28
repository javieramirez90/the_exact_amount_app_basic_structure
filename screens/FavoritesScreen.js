import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/demo-data';


const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.categoryIds.includes('c2') || meal.categoryIds.includes('c6'))

  return (
    <MealList
      displayedMeals={favMeals}
      navigation={props.navigation}
    />
    )
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
  headerTitle: 'My Favorites',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer()
        }}
      />
    </HeaderButtons>
    )
  }
};

export default FavoritesScreen;