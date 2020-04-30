import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { CATEGORIES } from '../data/demo-data';


const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals =  availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  if(displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText style={styles.noData} numberOfLines={2}>No meals founds. Check your filters!</DefaultText>
      </View>
    )
  }

  return (
    <MealList
      displayedMeals={displayedMeals}
      navigation={props.navigation}
    />
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;