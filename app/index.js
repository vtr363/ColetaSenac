import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { Avatar } from '@rneui/themed';
import axios from "axios";
import { Link } from "expo-router";

import { Divider } from "@rneui/base";

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
        <Text style={{color:"#F4F1E9", fontSize: 24 }}>Coleta #001</Text>
      </View>
      <View style={{backgroundColor:"#F4F1E9"}}>
        <Text style={styles.text}>ID da coleta: 001</Text>
        <Divider style={{ borderWidth: 0.5, borderColor: 'black' }} />
        <View style={{flexDirection: "row"}}>
            <View style={{padding:4, margin:4}}>
                <Text style={styles.text}>Data:</Text>
                <Text style={styles.text}>Data:</Text>
                <Text style={styles.text}>Data:</Text>
                <Text style={styles.text}>Data:</Text>
            </View>
            <Divider orientation="vertical" style={{marginHorizontal:8, borderWidth: 0.5, borderColor: 'black' }} />
            <View style={{padding:4, margin:4}}>
                <Text>Endereço</Text>
                <Text>Endereço</Text>
            </View>
        </View>
        <Divider  style={{ borderWidth: 0.5, borderColor: 'black' }} />
      </View>
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
  },
  text: {
  }
});

export default App;