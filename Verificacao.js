import React, { useState } from 'react';

import { View, Text, Switch, Button, TextInput, StyleSheet } from 'react-native';


const Verificacao = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.h1}>Verifique o Token de Acesso</Text>
        <Text style={styles.label}>Please enter the code we sent you to email</Text>

        <View style={styles.token}>
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}

          />
          <TextInput
            style={styles.input}

          />
          <TextInput
            style={styles.input}

          />
        </View>
        <Button
          style={styles.button}
          title="Próximo"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  token: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  h1: {
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'center',
  },
  label: {
    textAlign: 'center',
  },
  input: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginLeft: 12,
    marginRight: 12,
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 10
  },
  viewSocialMedia: {
    flexDirection: 'row'
  },

});
export default Verificacao;