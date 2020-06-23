import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { Styles } from '../../styles/styles'

const Contact = ({ name, phone, id, handleDeleteContact }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', padding: 10, width: '100%', marginTop: 10, backgroundColor: '#666699'}}>
            <Text style={{ flex: 2, color: '#fff'}}>{name} - {phone}</Text>
            <TouchableOpacity 
                style={{ flex: 1, alignSelf: 'flex-end', backgroundColor: '#e63900', height: 30, width: 60, justifyContent: 'center', alignItems: 'center'}}
                onPress={() => handleDeleteContact(id)}
            >
                <Text style={{ color: '#fff', fontWeight: 'bold'}}>Apagar</Text>
            </TouchableOpacity>
        </View>
    )
}

const ContactList = ({contacts, handleDeleteContact}) => {
    return <FlatList 
        data={contacts}
        renderItem={({item}) => <Contact name={item.name} phone={item.phone} id={item.id} handleDeleteContact={handleDeleteContact} />}
        keyExtractor={item => String(item.id)}
        style={{width: '90%'}}
    />
}

const ContactForm = ({name, phone, changeName, changePhone, submitForm }) => {
    return (
        <View style={{ width: '90%'}}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Informe o nome</Text>
            <TextInput 
                style={{ backgroundColor: '#fff', height: 40}}
                onChangeText={text => changeName(text)}
                value={name}
            />
            <Text style={{ color: '#fff', fontSize: 16 }}>Informe o telefone</Text>
            <TextInput 
                style={{ backgroundColor: '#fff', height: 40}}
                onChangeText={text => changePhone(text)}
                value={phone}
                keyboardType="numeric"
            />
            <TouchableOpacity 
                style={Styles.button}
                onPress={submitForm}
            >
                <Text style={Styles.textButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const Contacts = () => {
    
    const [contacts, setContacts] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    
    const database = SQLite.openDatabase('contacts.db')

    const handleSubmit = () => {
        if (name === '' || phone === '') {
            Alert.alert('Oops', 'Todos os campos devem ser preenchidos')
            return
        }
        
        let newContact = {
            name,
            phone
        }
        database.transaction(tx => {
            tx.executeSql(
                'insert into contacts(name, phone) values (?, ?)',
                [name, phone],
                (_, { insertId }) => {
                    newContact['id'] = insertId
                    setContacts([
                        ...contacts,
                        newContact
                    ])
                    setName('')
                    setPhone('')
                }
            )
        })
    }

    const handleChangeName = (newName) => {
        setName(newName)
    }

    const handleChangePhone = (newPhone) => {
        setPhone(newPhone)
    }

    const handleDeleteContact = (id) => {
        database.transaction(tx => {
            tx.executeSql(
                'delete from contacts where id = ?',
                [id],
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) {
                        setContacts(contacts.filter(contact => contact.id != id))
                    }
                }
            )
        })
    }

    useEffect(() => {
        database.transaction(tx => {
            tx.executeSql('create table if not exists contacts (id integer primary key not null, name text not null, phone text not null)')
            tx.executeSql(
                'select * from contacts',
                [],
                (_, { rows: {_array }}) => {
                    setContacts(_array)
                }
            )
        })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <ContactForm 
                name={name}
                phone={phone}
                changeName={handleChangeName}
                changePhone={handleChangePhone}
                submitForm={handleSubmit}
            />
            <ContactList contacts={contacts} handleDeleteContact={handleDeleteContact} />
        </View>
    )
}

export default Contacts