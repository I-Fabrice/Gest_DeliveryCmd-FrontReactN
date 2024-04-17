import React from 'react'
import { useState,useEffect} from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackActions, NavigationActions } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import WavyHeader from '../../util/commons/WavyHeader';

export default function Signupscreen(props) {

    const headerColor = '#888888'

    function goTo(){
        props.navigation.dispatch(StackActions.replace('Login'));
    }

    
  return (

    <View style={styles.container}>
    <KeyboardAwareScrollView>
            
      <WavyHeader customStyles={styles.svgCurve} headerColor={headerColor}/>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Inscription</Text>
      </View>

      <View style={styles.footer}>

        <Text style={[styles.title,{marginTop: 70}]}>Name</Text>
        <View style={styles.action}>
          <Ionicons name="person-outline" size={32} color="#888888" style={{marginTop:5}} />
          <TextInput style={styles.TextInput} maxLength={14}/>
        </View>

        <Text style={[styles.title,{marginTop: 15}]}>E-mail</Text>
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

          <View style={styles.button}>
          <TouchableOpacity>
               <Text style={{fontSize: 20,color: '#ffff',fontWeight: 'bold'}}>Create</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.button_Text}>
             <Text style={[{color: '#888888',fontSize:14}]}>Déjà inscrit(e)? </Text>
             <Text style={[{color: '#888888', fontWeight: 'bold',fontSize:14}]} onPress={goTo}>Se connecter</Text>
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
      backgroundColor: '#293133',
      paddingVertical: 10,
      paddingHorizontal: Dimensions.get('screen').width/4,
      marginTop: 25,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button_Text: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 70,
    }
  });