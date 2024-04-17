import React from 'react'

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TabNavigation from './TabNavigation'

import Loadingscreen from '../screens/commons/Loadingscreen';
import Loginscreen from '../screens/commons/Loginscreen';
import Signupscreen from '../screens/commons/Signupscreen';
import Resetpassword from '../screens/commons/Resetpassword';
import Searchscreen from '../screens/livreur/Searchscreen';

import Profilscreen from '../screens/commons/Profilscreen';
import MessagesScreen from '../screens/commons/MessagesScreen';
import Deliveryscreen from '../screens/livreur/Deliveryscreen';

import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);


const { Navigator, Screen} = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Load' component={Loadingscreen} options={(options)=>{
          return{
            headerShown: false,
          }
        }}></Screen>
        <Screen name='Login' component={Loginscreen} options={(options)=>{
          return{
            headerShown: false,
            animation: 'fade'
          }
        }}></Screen>
        <Screen name='Sign' component={Signupscreen} options={(options)=>{
          return{
            headerShown: false,
            animation: 'fade'
          }
        }}></Screen>
        <Screen name='Reset' component={Resetpassword} options={(options)=>{
          return{
            headerShown: false,
          }
        }}></Screen>
        <Screen name='Profil' component={Profilscreen} options={(options)=>{
          return{
            headerShown: false,
          }
        }}></Screen>
        <Screen name='Search' component={Searchscreen} options={(options)=>{
          return{
            headerTitle: null,
            headerSearchBarOptions: true,
            headerBackTitleVisible: false,
          }
        }}></Screen>
        <Screen name='Message' component={MessagesScreen} options={(options)=>{
          return{
            headerShown: false,
          }
        }}></Screen>
        <Screen name='Tab' component={TabNavigation} options={(options)=>{
          return{
            headerShown: false,
            animation: 'slide_from_bottom'
          }
        }}></Screen>
        <Screen name='Delivery' component={Deliveryscreen} options={(options)=>{
          return{
            headerShown: false,
          }
        }}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}
