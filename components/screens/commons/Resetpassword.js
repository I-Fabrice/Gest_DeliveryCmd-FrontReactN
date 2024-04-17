import React from 'react'
import { useState,useEffect} from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import WavyBottom from '../../util/commons/WavyBottom';

export default function Resetpassword(props) {
  const bottomColor = '#8888'

  function goBack(){
      props.navigation.goBack('Login')
  }
  
  return (
    <View style={styles.container}>

        <View style={styles.headerContainer}>

          <TouchableOpacity onPress={goBack}>
             <Ionicons name="chevron-back-outline" size={32} color="#888888" style={{marginTop:-20} } />
          </TouchableOpacity>

          <Text style={styles.headerText}>Réinitialisation</Text>
        </View>

        <View style={styles.footer}>
        <Text style={[styles.title,{marginTop: 15}]}>E-mail</Text>
        <View style={styles.action}>
          <Ionicons name="mail-outline" size={32} color="#888888" style={{marginTop:5}} />
          <TextInput style={styles.TextInput} maxLength={14}/>
        </View>

        <View style={styles.button_container}>

          <View style={styles.button}>
           <TouchableOpacity>
               <Text style={{fontSize: 20,color: '#ffff',fontWeight: 'bold'}}>Create</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.button_Text}>
             <Text style={[{color: '#888888',fontSize:15}]}>Veuillez saisir votre adresse mail</Text>
             <Text style={[{color: '#888888',fontSize:15}]}>Nous vous enverrons un lien à votre</Text>
             <Text style={[{color: '#888888',fontSize:15}]}>adresse</Text>
        </View>

        <WavyBottom customStyles={styles.svgCurve} bottomColor={bottomColor}/>
          
      </View>

        
        
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
      width: Dimensions.get('screen').width,
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#888888',
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
      backgroundColor: '#293133',
      paddingVertical: 12,
      paddingHorizontal: Dimensions.get('screen').width/4,
      marginTop: 25,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button_Text: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: 210,
    }
  });
