import React from 'react'
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StackActions, NavigationActions } from '@react-navigation/native';
import { StyleSheet, Text, View,Button, TouchableOpacity,Image } from 'react-native';
import { SearchBar } from 'react-native-screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';


import Communityscreen from '../screens/commons/Communityscreen';
import Deliveryscreen from '../screens/livreur/Deliveryscreen'
import Discussionscreen from '../screens/commons/Discussionscreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {

    function goToSearch(){
        props.navigation.navigate('Search')
    }

    function goToProfil(){
      props.navigation.navigate('Profil')
    }

  return (
    
    <Tab.Navigator screenOptions={{
        headerStyle: {
          backgroundColor : '#ffff'
        },
        headerTitle: "",
        headerRight: () => (
          [<TouchableOpacity onPress={goToProfil} key={"image"}>
            <Image 
             style={{marginRight:15,width:30,height:30,borderRadius: 50}}
             source={{
             uri: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05',
             
             }}/>
          </TouchableOpacity>,
          <View key={"icone"}  style={{justifyContent: 'center',alignItems: 'center', marginRight:62,marginTop: -30,width:30,height:30,borderRadius: 50, backgroundColor: '#E1E1E1'}}>
            <TouchableOpacity onPress={goToSearch}>
              <Ionicons name="search" size={22} color="black"/>
            </TouchableOpacity>
          </View>
        ]
        ),
        headerLeft: () =>(
          <Text style={{fontSize:24, marginLeft: 15,fontWeight: 'bold'}}>Home</Text>
        ),
        tabBarStyle: {
          backgroundColor: '#ffff'
        }
        }}>
        <Tab.Screen name='Delivery' component={Deliveryscreen} options={(options)=>{
            return{
              tabBarShowLabel: false,
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="home-outline" size={32} color="black"/>
              )
            }
          }}/>
        <Tab.Screen name='Chat' component={Discussionscreen} options={(options)=>{
            return{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="chatbubbles-outline" size={32} color="black"/>
              )
            }
          }}/>
        <Tab.Screen name='Community' component={Communityscreen} options={(options)=>{
            return{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ tintColor }) => (
                <Ionicons name="planet-outline" size={32} color="black" />
              )
            }
          }}
        />
        
    </Tab.Navigator>
  )
}
