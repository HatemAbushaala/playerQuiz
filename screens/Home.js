import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, Button } from 'react-native';
import levels from '../data';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.gridContiner}
        keyExtractor={(item) => item.id.toString()}
        data={levels}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.levelItem}
            onPress={() =>
              navigation.navigate('Level', {
                quizes: levels[item.id - 1].quizes,
                levelId: item.id,
              })
            }
          >
            <Text style={{ color: '#fff' }}>{item.id.toString()} </Text>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridContiner: {},

  levelItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: 300,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
  },
});
