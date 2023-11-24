import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { Avatar } from '@rneui/themed';
import axios from "axios";
import { Link } from "expo-router";

const App = () => {
    const [itensMenu, setItensMenu] = useState([
        {
            id: 1,
          icone: "https://img.icons8.com/ios-glyphs/60/garbage-truck.png",
          Label: "Coletas agendadas",
          link: ""
        },
        {
            id: 2,
          icone: "https://img.icons8.com/ios-glyphs/60/map-marker.png",
          Label: "Planejamento diário",
          link: ""
        },
        {
            id: 3,
          icone: "https://img.icons8.com/ios/50/delivery-time--v1.png",
          Label: "Histórico de coletas",
          link: "/HistoricoColetas"
        },
        {
            id: 4,
          icone: "https://img.icons8.com/ios/50/control-panel--v2.png",
          Label: "Índice de desempenho",
          link: ""
        },
      ]);


  

  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <Avatar
          size={128}
          rounded
          source={{uri: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        />
        
        <Text style={{color:"#F4F1E9", fontSize: 24 }}>Nome do coletor</Text>
        <Text style={{color:"#F4F1E9", fontSize: 24 }}>4.0</Text>
      </View>
      <FlatList
        style={{}}
        data={itensMenu}
        renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={styles.botao}>
              <Link href={item.link}></Link>
              <Image
                source={{ uri: item.icone }}
                width={60}
                height={60}
              />
              <Text>{item.Label}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F1E9",
    justifyContent: "center",
    padding: 24,
    paddingTop: 0,
  },
  topBackground: {
    backgroundColor: "#688F4E", 
    marginHorizontal: -24, 
    padding:16, 
    marginBottom: 16,
    justifyContent:"center",
    alignItems:"center"
  },
  textColor: {
    color: "#F4F1E9"
  },
  Tittle: {
    alignSelf: "center",
    fontSize: 24,
    padding: 8
  },
  subText: {
    margin: 8
  },
  item: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#F4F1E9",
    borderRadius: 8,
    margin: 4,
    borderStyle: "solid",
    borderColor: "#2B463C",
    borderWidth: 0.5,
    elevation: 4
  },
  linha1: {
    padding: 8,
    
  },
  linha2: {
    padding: 8
  },
  botao: {
    backgroundColor: "#F4F1E9",
    borderRadius: 8,
    margin: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default App;