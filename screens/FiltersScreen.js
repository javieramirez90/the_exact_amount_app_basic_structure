import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import { setFilters } from '../store/actions/meals';

const dispatchAlert = () => {
  Alert.alert(
    "Preferences",
    "Filters applied",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree
    };

    dispatch(setFilters(appliedFilters));
    dispatchAlert();
  }, [ isGlutenFree, isVegetarian, isVegan, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    })
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        conditional={isGlutenFree}
        setConditional={setIsGlutenFree}
        label="Gluten Free"
      />
      <FilterSwitch
        conditional={isVegan}
        setConditional={setIsVegan}
        label="Vegan"
      />
      <FilterSwitch
        conditional={isVegetarian}
        setConditional={setIsVegetarian}
        label="Vegetarian"
      />
      <FilterSwitch
        conditional={isLactoseFree}
        setConditional={setIsLactoseFree}
        label="Lactose Free"
      />
    </View>
  );
};
FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Result',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  }
}

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});

export default FiltersScreen;