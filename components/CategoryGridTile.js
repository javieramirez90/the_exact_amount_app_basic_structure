import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = (props) => {
  let TouchableComponent =  TouchableOpacity;

  if(Platform.OS === "android" && Platform.Version >=21) {
    TouchableComponent =  TouchableNativeFeedback;
  };
  return (
    <View style={styles.gridItem}>
      <ImageBackground source={{uri: props.itemData.item.uri}} style={styles.backgroundImage}>
      <TouchableComponent
      style={{flex: 1}}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: props.itemData.item.id
            }
            })
        }}
      >
        <View style={{...styles.container, }}>
          <Text style={styles.title} numberOfLines={2} >{props.itemData.item.title}</Text>
        </View>
      </TouchableComponent>
      </ImageBackground>
    </View>
  );
}

export default CategoryGridTile;

const styles =  StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height:2},
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: 'open-sans-bold',
    color: 'white',
    fontSize: 19,
    textAlign: 'right'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})