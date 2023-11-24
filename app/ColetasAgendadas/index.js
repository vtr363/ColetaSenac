import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import axios from "axios";
import { Divider } from "@rneui/base";

const App = () => {
  const [coletas, setColetas] = useState([
    {
      id: 1,
      data: "2023-07-20",
      hora: "10:00",
      endereco: "Rua da Liberdade, 123",
    },
    {
      id: 2,
      data: "2023-07-21",
      hora: "11:00",
      endereco: "Rua da Independência, 456",
    },
  ]);

  const [data, setData] = useState({
    dia: 1,
    mes: 12,
    ano: 2023
  })

  function diminuiDia(){
    if (data.dia>0 && data.dia<30){
        data.dia-=1
    }
  }
  function aumentaDia(){
    if (data.dia>0 && data.dia<30){
        data.dia+=1
    }
  }
  function diminuiMes(){
    if (data.mes>0 && data.dia<12){
        data.mes-=1
    }
  }
  function aumentaMes(){
    if (data.mes>0 && data.mes<12){
        data.mes+=1
    }
  }
  function diminuiAno(){
    if (data.ano>0){
        data.ano-=1
    }
  }
  function aumentaAno(){
    if (data.ano>0){
        data.ano+=1
    }
  }

  function fetchColetas() {
    return coletas;
  }

  useEffect(() => {
    fetchColetas();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <Text style={[styles.Tittle, {color: "#F4F1E9", justifyContent: "center"}]}>Coletas agendadas</Text>
      </View>
      <Text style={[styles.subText, { fontWeight: "bold" }]}>Total de coletas agendadas: 02</Text>
      <Divider style={{ borderWidth: 0.5, borderColor: 'black' }} />
      
      <Text style={styles.subText}>Filtrar por:</Text>
      <View style={[styles.buttonGroup, {alignContent: "space-around"}]}>
        <Text style={{paddingRight:56}}>Dia:</Text>
        <Text style={{paddingRight:56}}>Mes:</Text>
        <Text style={{paddingRight:56}}>Ano:</Text>
      </View>
      <View style={[styles.buttonGroup, {alignContent: "space-around", paddingBottom: 16}]}>
        
                <TouchableOpacity style={styles.button} onPressIn={() => aumentaDia}>
                    <Image source={{uri: 'https://img.icons8.com/ios/100/back--v1.png'}} style={styles.arrowIcon} />
                </TouchableOpacity>
                <Text style={{ alignSelf: "center"}}>{data.dia}</Text>
                <TouchableOpacity style={styles.button} onPressIn={() => diminuiDia}>
                    <Image source={{uri: 'https://img.icons8.com/ios/100/forward--v1.png'}} style={styles.arrowIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPressIn={() => aumentaMes}>
                    <Image source={{uri: 'https://img.icons8.com/ios/100/back--v1.png'}} style={styles.arrowIcon} />
                </TouchableOpacity>
                <Text style={{ alignSelf: "center"}}>{data.mes}</Text>
                <TouchableOpacity style={styles.button} onPressIn={() => diminuiMes}>
                    <Image source={{uri: 'https://img.icons8.com/ios/100/forward--v1.png'}} style={styles.arrowIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPressIn={() => aumentaAno}>
                    <Image source={{uri: 'https://img.icons8.com/ios/100/back--v1.png'}} style={styles.arrowIcon} />
                </TouchableOpacity>
                <Text style={{ alignSelf: "center"}}>{data.ano}</Text>
                <TouchableOpacity style={styles.button} onPressIn={() => diminuiAno}>
                    <Image source={{uri: 'https://img.icons8.com/ios/100/forward--v1.png'}} style={styles.arrowIcon} />
                </TouchableOpacity>
        
      </View>
      <Divider style={{ borderWidth: 0.5, borderColor: 'black', marginBottom:8}} />
      <FlatList
        data={coletas}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.item}>
            <View style={styles.linha1}>
              <View style = {{flexDirection: "row"}}>
                <Text style = {{color: "#2B463C", fontWeight: "bold"}}>ID da coleta: </Text>
                <Text style = {{color: "#787878"}}>{item.id}</Text>
              </View>
              <View style = {{flexDirection: "row"}}>
                <Text style = {{color: "#2B463C", fontWeight: "bold"}}>Data: </Text>
                <Text style = {{color: "#787878"}}>{item.data}</Text>
              </View>
              <View style = {{flexDirection: "row"}}>
                <Text style = {{color: "#2B463C", fontWeight: "bold"}}>Hora: </Text>
                <Text style = {{color: "#787878"}}>{item.hora}</Text>
              </View>
            </View>
            <Divider orientation="vertical" style={{ borderWidth: 0.5, borderColor: 'black' }} />
            <View style={styles.linha2}>
              <Text style = {{color: "#2B463C", fontWeight: "bold"}}>Endereço: </Text>
              <Text style = {{color: "#787878"}}>{item.endereco}</Text>
            </View>
          </View>
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
    padding:8, 
    marginBottom: 16
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
    width: 100,
    backgroundColor: "#F4F1E9",
    borderRadius: 8,
    margin: 8,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around"
  }, 
  button: {
    width: 24,
    height: 50,
    backgroundColor: '#F4F1E9',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    marginRight: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  }
});

export default App;