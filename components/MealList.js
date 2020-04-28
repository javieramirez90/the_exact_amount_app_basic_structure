import React from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';

const MealList = props => {

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
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.displayedMeals}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;