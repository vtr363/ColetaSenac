import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';


function HistoricoColeta () {

  return (
    <View style={styles.container}>
        <Text>historico de Coletas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HistoricoColeta;