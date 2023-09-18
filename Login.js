import React from 'react';
import { View, Image, Text, Button, TextInput, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Hi, Welcome</Text>

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
                <Button
                    style={styles.button}
                    title="Log In"
                    onPress={() => navigation.navigate('CadastroP1')}
                />
                <Text
                    style={styles.forgotPassword}
                    onPress={() => navigation.navigate('ForgotPassword')}

                >
                    Forgotten your password?
                </Text>
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
    h1: {
        fontSize: 20,
        fontWeight: 600,
    },
    h2: {
        fontSize: 22,
        fontWeight: 400,
        color: '#C4C4C4'
    },

    label: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 8
    },
    input: {
        width: 400,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginBottom: 20,

    },
    forgotPassword: {
        fontSize: 13,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#14304A',
        fontWeight: 600
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

export default Login;