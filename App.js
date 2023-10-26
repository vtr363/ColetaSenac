import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HistoricoColeta } from './src/HistoricoColeta';
import { useState } from 'react';

export default function App() {
  const[totalColetas, setTotalColetas] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header} >Historico de coletas</Text>
        <View>
          <Text style={styles.title} >Total de coletas realizadas: {totalColetas}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    fontSize: 32,
    backgroundColor: '#F4F1E9',
    color: "#2B463C",
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop:32,
    padding: 8
  },
  title: {
    fontSize: 24,
    padding: 8
  }
});
