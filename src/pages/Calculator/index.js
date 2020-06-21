import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Styles } from '../../styles/styles'

const Calculator = () => {

    const [operation, setOperation] = useState('')

    const handleButtons = (value) => {
         setOperation(`${operation}${value}`)
    }

    const handleClearButton = () => {
        setOperation('')
    }

    const showResult = () => {
        if (!operation) {
            setOperation('')
            return
        }
        const result = eval(operation)
        setOperation(result)
    }

    return (
        <View style={styles.container}>
            <View style={styles.lcd}>
                <Text style={{ fontSize: 36, textAlign: 'right', width: '100%' }}>{operation}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(7)}>
                    <Text style={styles.textButton}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(8)}>
                    <Text style={styles.textButton}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(9)}>
                    <Text style={styles.textButton}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton} onPress={() => handleButtons('/')}>
                    <Text style={styles.textButton}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(4)}>
                    <Text style={styles.textButton}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(5)}>
                    <Text style={styles.textButton}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(6)}>
                    <Text style={styles.textButton}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton} onPress={() => handleButtons('*')}>
                    <Text style={styles.textButton}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(1)}>
                    <Text style={styles.textButton}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(2)}>
                    <Text style={styles.textButton}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(3)}>
                    <Text style={styles.textButton}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton} onPress={() => handleButtons('-')}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons(0)}>
                    <Text style={styles.textButton}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleClearButton()}>
                    <Text style={styles.textButton}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtons('%')}>
                    <Text style={styles.textButton}>mod</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton} onPress={() => handleButtons('+')}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={styles.operatorButton} onPress={() => handleButtons('.')}>
                    <Text style={styles.textButton}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.equalsButton} onPress={showResult}>
                    <Text style={styles.textButton}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Styles.container,
        alignItems: 'stretch'
    },
    lcd: {
        height: 200,
        width: '100%',
        backgroundColor: '#f8f8f2',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    description: {
        ...Styles.description
    },
    button: {
        ...Styles.button,
        width: 60,
    },
    operatorButton: {
        ...Styles.button,
        width: 70,
    },
    textButton: {
        ...Styles.textButton
    },
    equalsButton: {
        ...Styles.button,
        width: '60%'
    }
})

export default Calculator