import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Navigator from './pages/Navigator'
import RequiredPage from './pages/Navigator/RequiredPage'
import ShowMe from './pages/ShowMe'
import Contacts from './pages/Contacts'

const Routes = () => {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f8f2" />
            <Stack.Navigator screenOptions={{
                cardStyle: {
                    backgroundColor: '#282a36'
                },
                headerStyle: {
                    backgroundColor: '#f8f8f2'
                }
            }}>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
                <Stack.Screen name="Calculator" component={Calculator}  options={{ title: 'Calculadora' }} />
                <Stack.Screen name="Navigator" component={Navigator}  options={{ title: 'Navegador' }} />
                <Stack.Screen name="RequiredPage" component={RequiredPage}  options={{ title: 'Navegação' }} />
                <Stack.Screen name="ShowMe" component={ShowMe}  options={{ title: 'Me mostre' }} />
                <Stack.Screen name="Contacts" component={Contacts}  options={{ title: 'Agenda' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes