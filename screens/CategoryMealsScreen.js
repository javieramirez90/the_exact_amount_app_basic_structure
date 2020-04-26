import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button title="Detail Meal" onPress={() => {
        props.navigation.navigate({
          routeName: 'MealDetail'
        })
      }}/>
      <Button title="Go Back" onPress={() => {
        props.navigation.goBack();
        // This pop method has the same effect but it is only available in stacknavigation
        // props.navigation.pop();
        }
      }/>
    </View>
  );
};

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;