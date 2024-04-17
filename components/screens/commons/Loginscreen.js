import React from 'react'
import { useState,useEffect} from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import WavyHeader from '../../util/commons/WavyHeader';
import * as Location from 'expo-location';

export default function Loginscreen(props) {
  
  const headerColor = '#ff9900';

  function goTo(){
    props.navigation.dispatch(StackActions.replace('Sign'));
 }

 function goToReset(){
    props.navigation.navigate('Reset')
 }

 function goToHome(){
    //props.navigation.dispatch(StackActions.replace('Tab'));
     props.navigation.replace('Tab');
 }

  useEffect(() => {
    
  }, []);
  return (
    
    <View style={styles.container}>

      <KeyboardAwareScrollView>
      <WavyHeader customStyles={styles.svgCurve}  headerColor={headerColor}/>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Connexion</Text>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.title,{marginTop: 90}]}>E-mail</Text>
        <View style={styles.action}>
          <Ionicons name="mail-outline" size={32} color="#888888" style={{marginTop:5}} />
          <TextInput style={styles.TextInput} maxLength={14}/>
        </View>

        <Text style={[styles.title,{marginTop: 15}]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" size={32} color="#888888" style={{marginTop:5}}/>
          <TextInput secureTextEntry={true} style={styles.TextInput} maxLength={10} />
        </View>

        <View style={styles.button_container}>
          <Text style={[{marginTop: 25, color: '#27BE6E', fontWeight: 'bold',fontSize:14}]} onPress={goToReset}>Mot de passe oublié?</Text>

          <View style={styles.button}>
            <TouchableOpacity onPress={goToHome}>
               <Text style={{fontSize: 20,color: '#ffff',fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.button_Text}>
             <Text style={[{color: '#888888',fontSize:14}]}>Pas encore inscrit(e)? </Text>
             <Text style={[{color: '#888888', fontWeight: 'bold',fontSize:14}]} onPress={goTo}>S'inscrire</Text>
        </View>
      

      </View>

      </KeyboardAwareScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35
  },
  footer: {
    padding: 40,
  },
  title : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#293133',
  },
  action : {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  },
  TextInput : {
    fontSize: 15,
      marginTop: 15,
      marginBottom: 15,
      marginLeft:10,
      color: 'black',
      width: Dimensions.get('screen').width-120,
  },
  button_container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button : {
    backgroundColor: '#ff9900',
    paddingVertical: 10,
    paddingHorizontal: Dimensions.get('screen').width/4,
    marginTop: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_Text: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 80,
  }
});

