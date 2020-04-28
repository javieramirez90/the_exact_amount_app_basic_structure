import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import { CATEGORIES, MEALS } from '../data/demo-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals =  MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const onSelectMeal = (mealData) => {
    props.navigation.navigate({
      routeName: 'MealDetail',
      params: {
        mealData
      }
    })
  };

  const renderMealItem = itemData => {
    return (
      <MealItem itemData={itemData} onSelectMeal={() => onSelectMeal(itemData)}/>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {

  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title
  };
};

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;