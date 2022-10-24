import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { COLOURS } from '../Coler';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View
            styles={styles.container}
            behavior="padding"
            keyboardVerticalOffset={10}
        >
            <View style={styles.content}>
                <View style={styles.textContent}>
                    <Text style={styles.h2text}>Login</Text>
                </View>
            </View>
            <View styles={styles.inputContainer}>
                <TextInput
                    placehalder="Email"
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholderTextColor={COLOURS.grey}
                />
                <TextInput
                    placehalder="Password"
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry
                    placeholderTextColor={COLOURS.grey}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MainScreen')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={[styles.button, styles.buttonOutLine]}>
                    <Text style={styles.buttonOutLineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        backgroundColor: COLOURS.red,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    inputContainer: {
        width: '80%'
    },
    textContent: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      },
      content: {
        flex: 1,
      },
    input: {
        backgroundColor: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#0782f9',
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        // fontVariant: '700',
        fontSize: 20
    },
    buttonOutLine: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2
    },
    buttonOutLineText: {
        color: '#0782f9',
        fontVariant: '700',
        fontSize: 16
    },
})