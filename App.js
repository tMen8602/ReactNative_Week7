import { Text, SafeAreaView, StyleSheet } from 'react-native';



// or any files within the Snack
import Screen1 from './components/Screen1';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

        <Screen1 />
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
