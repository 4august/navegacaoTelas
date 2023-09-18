import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';

const CadastroP2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.h1}>Qual o seu email?</Text>
        <Text style={styles.label}>Endereço Email</Text>
        <TextInput
          style={styles.input}
        />
        <Button
          style={styles.button}
          title="Próximo"
          onPress={() => navigation.navigate('CadastroP3')}
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
    marginTop:20
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
export default CadastroP2;