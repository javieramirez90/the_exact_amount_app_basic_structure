import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { CATEGORIES } from '../data/demo-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        navigation={props.navigation}
        itemData={itemData}
      />
    );
  };

  return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
}

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;