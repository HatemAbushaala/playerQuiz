import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
  Dimensions,
} from 'react-native';

const Level = (props) => {
  let navigation = props.navigation;
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        style={styles.grid}
        numColumns={4}
        data={props.route.params.quizes}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Button
              color="#fff"
              title={item.id.toString()}
              onPress={() => {
                navigation.navigate('Quiz', {
                  number: item.id,
                  answer: item.answer,
                });
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Level;

const styles = StyleSheet.create({
  grid: {},

  gridItem: {
    justifyContent: 'center',
    backgroundColor: 'green',

    height: 60,
    margin: 8,
    borderRadius: 20,
    width: Dimensions.get('window').width / 4 - 16,
  },
});
