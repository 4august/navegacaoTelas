import React, { useState } from 'react';

import { View, Text, Switch, Button, TextInput, StyleSheet } from 'react-native';


const CadastroP3 = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [text, setText] = useState('Mostrar Senha');

  const togglePasswordVisibility = () => {

    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.h1}>Crie a sua Senha</Text>
        <Text style={styles.label}>Coloque sua própria senha</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          secureTextEntry={!isPasswordVisible}
        />
        <View >
          <Text style={styles.label} value={isPasswordVisible} onPress={togglePasswordVisibility}>{isPasswordVisible ? 'Esconder Senha' : 'Mostrar Senha'}</Text>
        </View>
        <Button
          style={styles.button}
          title="Próximo"
          onPress={() => navigation.navigate('Verificacao')}
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
  switchPassword: {

  },
  scwitchContainer: {
    flexDirection: 'row'
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
    marginTop: 20
  },
  input: {
    width: 400,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 32,
    paddingRight: 32,
  },
  viewSocialMedia: {
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50, // Define as bordas arredondadas para criar um círculo
    margin: 10,
  }
});
export default CadastroP3;