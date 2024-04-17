import React, { useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { StackActions, NavigationActions } from '@react-navigation/native';

import Load from '../../../assets/spinners/Load'

export default function Loadingscreen(props) {

  useEffect(() => {
  // Wait for 3 seconds
  setTimeout(() => {
  //props.navigation.navigate('Login')
    props.navigation.dispatch(StackActions.replace('Login'));
  }, 2300);
  }, []);
 

  return (
    <View style={styles.container}>
      <View style={styles.tinyLogo}>
         <Image source={require('../../../assets/imgs/m.png')}/>
         <Load/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tinyLogo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });
  


