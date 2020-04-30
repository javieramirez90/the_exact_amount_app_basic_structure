import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';


const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if(favMeals.length === 0 || !favMeals){
    return (
      <View style={styles.content}>
        <DefaultText style={styles.noData} numberOfLines={2}>No favorite meals founds. Start adding some!</DefaultText>
      </View>
    )
  }

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

const styles =  StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    color: 'lightgray',
    fontFamily: 'open-sans',
    fontSize: 16,
    textAlign: 'center',
    padding:15
  }
});

export default FavoritesScreen;