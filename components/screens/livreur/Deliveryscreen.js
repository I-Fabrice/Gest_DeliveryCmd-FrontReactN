import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import * as Localization from 'expo-localization'
import { StackActions } from '@react-navigation/native';
import { Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { FlatList } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from '@expo/vector-icons/Ionicons';
//import BingMapsReact from "bingmaps-react";

const DATA = [
  {
    id: 1,
    icon : "walk"
  },
  {
    id: 2,
    icon : "car"
  },
  {
    id: 3,
    icon : "bicycle"
  }
]

export default function Deliveryscreen(props) {
  
  const [Loc,setLoc] = useState(null)
  const [focus,setFocus] = useState(true)
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item}) => {

    const backgroundColor = item.id === selectedId ? "blue" : "black";

    return(
      <TouchableOpacity onPress={() => setSelectedId(item.id)}>
          <Ionicons name= {item.icon} size={28} color= {backgroundColor} style={{marginHorizontal : Dimensions.get('screen').width/10}}/>
      </TouchableOpacity>
    );
  };
  //const GOOGLE_MAPS_APIKEY = 'AIzaSyDySaajyZjpChsnVNuJwWbWwoIRsT_Tezk'
  

  const [coordinates] = useState([
    {
      latitude: 33.5731104,
      longitude: -7.5898434,
    },
    {
       accuracy: 10,
       altitude: 80.86298751831055,
       altitudeAccuracy: 4,
       heading: 29.53125,
       latitude: 33.542245728926304,
       longitude: -7.687079943723685,
       speed: 0,
    },
  ]);

  useEffect(() => {
    
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLoc(location)
      
    })();

    setTimeout(() => {
      setFocus(false)
    }, 300);

  }, []);
   
  
    return (
      
        <View style={styles.container}>
        <MapView 
        style={styles.map}
        userInterfaceStyle={'light'}
        showsUserLocation={true}
        showsTraffic={true}
        loadingEnabled={true}
        followsUserLocation={focus}
        rotateEnabled={false}>
          
        </MapView>
        <View style={styles.button}>
           <View style={{flex: 1}}>
           <FlatList
           data={DATA}
           horizontal={true}
           renderItem={renderItem}
           keyExtractor={(item) => item.id}
           extraData={selectedId}/>
           </View>
        </View>
        
      </View>
       /*<Marker coordinate={coordinates[0]} />
       <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="#1E90FF"/>*/
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  icon : {
    flex: 1,
    flexDirection: "row",
  },
  button : 
  {
    position: 'absolute',
    top: 10,
    backgroundColor: '#ffff',
    opacity: 0.7,
    paddingVertical: 50,
    borderRadius: 20,
    width: Dimensions.get('screen').width/1.08,
    alignItems: 'center',
  }
});