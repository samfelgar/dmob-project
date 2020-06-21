import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Styles } from '../../styles/styles'

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Selecione a funcionalidade desejada:</Text>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Calculator')}}
                style={styles.button}
            >
                <Text style={styles.textButton}>Calculadora</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => { navigation.navigate('Navigator')}}
                style={styles.button}
            >
                <Text style={styles.textButton}>Navegador</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Contacts') }}
                style={styles.button}
            >
                <Text style={styles.textButton}>Agenda telefônica</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('ShowMe') }}
                style={styles.button}
            >
                <Text style={styles.textButton}>Me mostre no mapa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Styles.container
    },
    description: {
        ...Styles.description
    },
    button: {
        ...Styles.button
    },
    textButton: {
        ...Styles.textButton
    }
})

export default Home