import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        alert(`username: ${username} Password: ${password}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={text => { setPassword(text) }}
                secureTextEntry
                value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export {
    Login
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:24,
        marginBottom:16,
    },
    input:{
        height:40,
        width:'90%',
        borderColor:'gray',
        borderWidth:1,
        marginBottom:16,
        paddingHorizontal:8,
    },
    button:{
        backgroundColor:'blue',
        paddingVertical:12,
        width:'90%',
        alignItems:"center",
        marginTop:18,
    },
    buttonText:{
        color:'white',
        fontSize:18,
    }
})