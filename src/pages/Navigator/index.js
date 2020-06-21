import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Styles } from '../../styles/styles'

const Navigator = ({ navigation }) => {

    const [goTo, setGoTo] = useState('http://')

    const handleChangeText = (input) => {
        setGoTo(input)
    }

    const handleSubmit = () => {
        navigation.navigate('RequiredPage', {
            uri: goTo
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={[Styles.description, { textAlign: 'center', marginTop: 30 }]}>
                Digite o endereço de um site e toque em "Go!"
            </Text>
            <TextInput
                style={{ width: '90%', padding: 10, marginTop: 20, backgroundColor: '#fff'}}
                onChangeText={input => handleChangeText(input)}
                autoCapitalize="none"
                value={goTo}
                onSubmitEditing={handleSubmit}
            />
            <TouchableOpacity style={Styles.button} onPress={handleSubmit} >
                <Text style={Styles.textButton}>Go!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navigator