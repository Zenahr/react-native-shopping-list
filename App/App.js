import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [todos, setTodos] = useState([
    {text: "milk", key: '1'},
    {text: "sugar", key: '2'},
    {text: "cocoa", key: '3'}
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{styles.content}}>
        {/* Form */}
        <View style={{styles.list}}>
          <FlatList>

          </FlatList>
        </View>
      </View>
      {/* <Text style={{color: 'white'}}>Hello World</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3b3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
