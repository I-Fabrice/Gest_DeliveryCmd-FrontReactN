import React, { useState,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Profilscreen(props) {
  const [image, setImage] = useState('https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05',
  );

    function goBack(){
        props.navigation.goBack('Tab')
    }
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }  

  return (
    <View style={styles.container}>
      
      <KeyboardAwareScrollView>
      <View style={styles.headerContainer}>

<TouchableOpacity onPress={goBack}>
    <Ionicons name="chevron-back-outline" size={32} color="black" style={{marginTop:-20} } />
</TouchableOpacity>

<View style={styles.header}>
 <TouchableOpacity onPress={pickImage}>
   <Image 
    style={styles.image}
    source={{
    uri: image
    }}/>
 </TouchableOpacity>
</View>

<View style={styles.footer}>
  <Text style={[styles.title,{marginTop: 0}]}>Name</Text>

  <View style={styles.action}>
        <Ionicons name="person-outline" size={32} color="#888888" style={{marginTop:5}} />
        <TextInput style={styles.TextInput} maxLength={14}/>
  </View>

   <Text style={[styles.title,{marginTop: 15}]}>E-mail</Text>

   <View style={styles.action}>
      <Ionicons name="mail-outline" size={32} color="#888888" style={{marginTop:5}} />
      <TextInput style={styles.TextInput} maxLength={14}/>
   </View>
   <Text style={[styles.title,{marginTop: 15}]}>Location</Text>

   <View style={styles.action}>
      <Ionicons name="pin-outline" size={32} color="#888888" style={{marginTop:5}} />
      <TextInput style={styles.TextInput} maxLength={14}/>
   </View>
   
   <Text style={[styles.title,{marginTop: 15}]}>Password</Text>

   <View style={styles.action}>
     <Feather name="lock" size={32} color="#888888" style={{marginTop:5}}/>
     <TextInput secureTextEntry={true} style={styles.TextInput} maxLength={10} />
   </View>

   <View style={styles.button}>
       <TouchableOpacity>
          <Text style={{fontSize: 20,color: '#ffff',fontWeight: 'bold'}}>Save</Text>
       </TouchableOpacity>
    </View>

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
    image: {
        marginTop:15, 
        width:120,
        height:120,
        borderRadius: 150
    },
    header: {
      alignItems: 'center'
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
      marginTop: 15,
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
