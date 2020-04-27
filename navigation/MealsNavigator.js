import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import { Platform } from 'react-native';
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

export default createAppContainer(MealsNavigator);