import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.5088229,
          longitude: 35.0833876,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006
        }}>
        
        <Marker coordinate={ {latitude: 48.5088229,
          longitude: 35.0833876}} />

      </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex:1
    
  },
  map: {
    flex:1
  }
})