import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footerContent}>
            <Text style={styles.footerItem}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ed5565',
        height: 60,
        padding: 10,
    },
    footerItem: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
