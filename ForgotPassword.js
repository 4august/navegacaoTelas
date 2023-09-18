import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';

const ForgotPassword = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.h1}>Recupere sua Conta</Text>

                <Text style={styles.label}>Informe seu Email</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />

                <Button
                    style={styles.button}
                    title="Enviar código de recuperaçao"
                    onPress={() => navigation.navigate('Login')}
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
        marginBottom: 20

    },
    text: {
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        width: 400,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginBottom: 20,
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
export default ForgotPassword;