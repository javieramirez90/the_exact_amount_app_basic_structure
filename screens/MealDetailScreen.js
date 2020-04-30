import React, { useState, useEffect, useCallback } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
    );
};

const MealDetailScreen = props => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { navigation } = props;
  const mealData = props.navigation.getParam('mealData');
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealData.item.id));
    setIsFavorite(!isFavorite)
  }, [dispatch, mealData, isFavorite]);

  const favoriteMeals =  useSelector(state => state.meals.favoriteMeals);

  useEffect(() => {
    const favorite =  favoriteMeals.filter(meal => meal.id === mealData.item.id);
    if(favorite.length > 0){
      console.log(favorite.length)
      setIsFavorite(true)
    }
    navigation.setParams({
      favorite: isFavorite
    })
  }, [favoriteMeals, isFavorite])


  useEffect(() => {
    navigation.setParams({
      toggleFavorite: toggleFavoriteHandler
    })
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image
        source={{uri: mealData.item.imageUrl}}
        style={styles.image}
      />
      <View style={styles.details}>
        <DefaultText>{mealData.item.duration}m</DefaultText>
        <DefaultText>{mealData.item.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{mealData.item.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {mealData.item.ingredients.map((ingredient, index) => {
        return <ListItem key={index}>- {ingredient}</ListItem>
      })}
      <Text style={styles.title}>Steps</Text>
      {mealData.item.steps.map((step, index) => {
        return <ListItem key={index}>- {step}</ListItem>
      })}

      <View style={styles.screen}>
        {/* <Text>The Meal Detail Screen</Text>
        <Text>{mealData.item.title}</Text> */}
        <Button title="Go Back to Categories" onPress={() => {
          props.navigation.popToTop();
        }}/>
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealData = navigationData.navigation.getParam('mealData');
  const isFavorite = navigationData.navigation.getParam('favorite');
  const toggleFavoriteMeal = navigationData.navigation.getParam('toggleFavorite');

  return {
    headerTitle: mealData.item.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={ isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavoriteMeal}
        />
      </HeaderButtons>
      )
  };
};

const styles =  StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 7,
    marginHorizontal: 20,
    borderColor: '#ccc',
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;