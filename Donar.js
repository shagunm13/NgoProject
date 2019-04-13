import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Donar extends Component {

    render() {

        return (
            <View>
                <Text style={styles.DonarContent}> Donar Page</Text>
                <Text style={styles.DonarContent}>  Coming soon...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    DonarContent: {
        marginTop: 20,
        width: '80%',
        height: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        top: 160,
        color: '#02486F',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30,
        textAlign: 'center'
    }
})