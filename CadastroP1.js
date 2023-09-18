import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';

const CadastroP1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.h1}>Create Account</Text>
                <Text style={styles.text}>Fill your information below or register
                    with your social account</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    placeholder="Preencha o nome"
                    style={styles.input}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="Preencha o email"
                    style={styles.input}
                />

                <Text style={styles.label}>Nome</Text>
                <TextInput
                    placeholder="Preencha o nome"
                    style={styles.input}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="Preencha o email"
                    style={styles.input}
                />

                <Button
                    style={styles.button}
                    title="Próximo"
                    onPress={() => navigation.navigate('CadastroP2')}
                />
            </View>
            <View style={styles.viewSocialMedia}>
                <Image
                    source={require('./src/Group 12.png')}
                    style={styles.image}
                />
                <Image
                    source={require('./src/Group 13.png')}
                    style={styles.image}
                />
                <Image
                    source={require('./src/Group 14.png')}
                    style={styles.image}
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
    h1:{
        fontSize: 28,
        fontWeight: 600,
        textAlign: 'center',
    },
    text:{
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'center',
    },
    label:{
        paddingLeft: 32,
    }, 
    input: {
        width: 400,
        borderRadius: 30,
        borderWidth: 1,
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
export default CadastroP1;