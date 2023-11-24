import { StatusBar } from 'expo-status-bar';
import { useState, userState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals, 
      enteredGoalText,
    ])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Jouw doel!' 
          onChangeText={goalInputHandler}/>
        <Button title='Doel toevoegen' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText} >{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '60%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText:{
    color: 'white',
  }
});
