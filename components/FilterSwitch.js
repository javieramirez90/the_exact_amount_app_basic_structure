import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.accentColorT, false: ''}}
        thumbColor={props.conditional ? Colors.accentColor : 'white'}
        onValueChange={() => props.setConditional(() => !props.conditional)}
        value={props.conditional}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
  }
});

export default FilterSwitch;