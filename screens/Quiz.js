import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Alert,
} from 'react-native';
import {
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const Quiz = ({ route, navigation }) => {
  const [userInput, setInput] = useState('');

  const answer = route.params.answer;

  const checkAnswer = () => {
    // console.log(answer);
    console.log(userInput);
    if (answer === userInput) {
      Alert.alert('correct');
      navigation.pop();
    } else Alert.alert('wrong');

    //if (i.toLowerCase() === answer) console.log('success');
    //else console.log('wrong answer');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      {/* <TextInput style={styles.textInput} value={userInput} /> */}
      <View style={styles.row}>
        <View style={styles.checkButton}>
          <Button
            color="#fff"
            style={{ backgroundColor: 'red' }}
            title="check"
            onPress={() => checkAnswer(userInput)}
          />
        </View>

        <Text style={styles.textInput}>{userInput}</Text>
      </View>

      <FlatList
        keyExtractor={(item) => item.toString()}
        style={styles.keyboardList}
        data={[
          'ا',
          'ب',
          'ت',
          'ج',
          'ح',
          'خ',
          'ع',
          'ه',
          'غ',
          'ف',
          'ق',
          'ث',
          'ص',
          'ض',
          'ك',
          'م',
          'ن',
          'ل',
          'ي',
          'س',
          'ش',
          'و',
          'ر',
          'ز',
          'د',
          'ذ',
          'ط',
          'ظ',
          'ء',
          'ئ',
          'ؤ',
          'ؤ',
        ]}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              let newInput = `${userInput}${item}`;
              setInput(newInput);
            }}
          >
            <View style={styles.key}>
              <Text>{item}</Text>
            </View>
          </TouchableHighlight>
        )}
        //Setting the number of column
        numColumns={10}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button
        title="x"
        onPress={() => {
          setInput(userInput.slice(0, -1));
        }}
      />
    </View>
  );
};

Quiz.navigationOptions = (navigationData) => {
  console.log(navigationData);
  return {
    headerTitle: `Quiz 1 ${navigationData.number}`,
    //   headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    //   },
    //   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  };
};
export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3aa094',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  textInput: {
    margin: 8,
    borderRadius: 20,
    borderBottomColor: 'gray',
    borderWidth: 0.5,
    width: '60%',
    height: 40,
    padding: 8,
    textAlign: 'center',
  },
  keyboardList: {
    backgroundColor: 'yellow', // this should be in wrapper to colorize the bottom also
    width: '100%',
    top: 40,

    // bottom: 30,
    // position: 'absolute',
  },
  key: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width / 10 - 2,
    backgroundColor: 'green',
    height: 40,
    flex: 1,
    margin: 1,
  },
  row: {
    flexDirection: 'row',
  },
  checkButton: {
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
});
