import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Styles } from '../../styles/styles'

const ShowMe = () => {

    const [initialPosition, setInitialPosition] = useState([0, 0])

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Oops!', 'Permissão para acessar a localização foi negada')
                return
            }
      
            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Highest
            });
            let { latitude, longitude } = location.coords
            setInitialPosition([ latitude, longitude ]);
          })();
    }, [])

    if (initialPosition[0] === 0) {
        return (
            <View style={Styles.container}>
                <Text style={Styles.description}>
                    Um momento...
                </Text>
            </View>
        )
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <MapView
                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                initialRegion={{
                    latitude: initialPosition[0],
                    longitude: initialPosition[1],
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}
                >
                <Marker 
                    coordinate={{
                        latitude: initialPosition[0],
                        longitude: initialPosition[1]
                    }}
                />
            </MapView>
        </View>
    )
}

export default ShowMe