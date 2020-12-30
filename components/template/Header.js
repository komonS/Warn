import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { Link } from 'react-router-native'

import { LoginContext } from '../../store/LoginProvider'

export default function Header() {
    const { login, setLogin } = useContext(LoginContext)
    const Login = () => {
        return (
            <Avatar
                size="medium"
                rounded
                title="K17"
                onPress={() => console.log("Works!")}
                containerStyle={{ backgroundColor: '#C4C4C4', padding: 3 }}
            />
        )
    }
    const LoginButton = () => {
        return (
            <Link to="/login">
                <Text style={styles.headerItem}>Login</Text>
            </Link>
        )
    }
    return (
        <View style={styles.headerContent}>
            <Link to="/">
                <Text style={styles.headerItem}>Warn</Text>
            </Link>
            {login ? <Login /> : <LoginButton />}
        </View>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#E71D31',
        height: 60,
        padding: 10,
    },
    headerItem: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
