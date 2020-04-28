import React from 'react';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';


const topBar = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },

  MealDetail: {
    screen: MealDetailScreen,
  }
},{
  defaultNavigationOptions:{
    ...topBar
  }
});

const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen
  },
  MealDetail: {
    screen: MealDetailScreen
  }
}, {
  defaultNavigationOptions:{
    ...topBar
  }
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor}/>
      },
      // TABBARCOLOR ONLY HAVE EFFECT IF SHIFTING IS TRUE OR ADDING THE BARSTYLE PROPERTY
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={23} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.accentColor
    }
  }
};

const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: Colors.accentColor,
    activeColorLight: 'white',
    shifting: true,
    // barStyle: {
    //   backfaceVisibility: Colors.primaryColor
    // }
    })
  : createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

FiltersNavigator.navigationOptions = {
  headerTitle: 'Filter Meals'
};

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator
  },
  Filter: {
    screen: FiltersNavigator
  }
});

export default createAppContainer(MainNavigator);