import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login() {
    return (
        <View style={styles.loginConten}>
            <View style={styles.loginLayer}>
                <View style={styles.loginItem}>
                    <Text>Username : </Text>
                    <TextInput style={{ backgroundColor: '#C4C4C4', width: 155, height: 30, borderRadius: 5 }} />
                </View>
                <View style={styles.loginItem}>
                    <Text>Password : </Text>
                    <TextInput style={{ backgroundColor: '#C4C4C4', width: 155, height: 30, borderRadius: 5 }} />
                </View>
                <View style={styles.loginItem}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginItem2}>
                    <TouchableOpacity >
                        <Text>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text>Forgot password ?</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginConten: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginLayer: {
        backgroundColor: '#ffffff',
        height: 200,
        width: 300,
        borderRadius: 5,
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    loginItem2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ED4253',
        width: 80,
        height: 30,
        borderRadius: 5
    }

})
