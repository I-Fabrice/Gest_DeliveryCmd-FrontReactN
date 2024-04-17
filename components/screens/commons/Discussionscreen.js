import React from 'react'
import { useState,useEffect} from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput,ScrollView, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import SearchInput from '../../util/commons/SearchInput';
import ConversationItem from '../../util/commons/ConversationItem';
import { Swipeable } from 'react-native-gesture-handler';
import { FlatList,Animated } from 'react-native';

const DATA = [
  {
    "id": "1",
    "picture": "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "username": "Murphy Patrick",
    "bio":"my name is Mercy Patrick",
    "lastMessage": "Hello there",
    "time":"4:00 PM",
    "notification": "5",
  },
  {
    "id": "2",
    "picture": "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "username": "Murphy Patrick",
    "bio":"my name is Mercy Patrick",
    "lastMessage": "Hello there",
    "time":"4:00 PM",
    "notification": "5",
  },
  {
    "id": "3",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "username": "Murphy Patrick",
    "bio":"my name is Mercy Patrick",
    "lastMessage": "Hello there",
    "time":"4:00 PM",
    "notification": "5",
    //isBlocked,
    //isMuted,
    //hasStory,
  }
]



export default function Discussionscreen(props) {

  const [lists, setLists] = useState(DATA);
  const [index,setIndex] = useState();

  const renderItem = ({ item,index}) => {
      
    return(
      <Swipeable renderRightActions={(progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 1],
          extrapolate: 'extend',
        });
        return (
          <TouchableOpacity onPress={() => {
            const arr = [...lists];
            arr.splice(index,1);
            setLists(arr);
            
          }} activeOpacity={0.6}>
            <View style={styles.deleteBox}>
              <Animated.Text style={{transform: [{scale: scale}],color: "#fff",fontWeight: "bold",fontSize: 17}}>
                Supprimer
              </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      }}>

      <ConversationItem 
      picture={item.picture} 
      username={item.username} 
      bio={item.bio} 
      lastMessage={item.lastMessage} 
      time={item.time} notification={item.notification} 
      isBlocked={true}  isMuted={true} hasStory={true} />
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
           <Text style={styles.headerText}>Messages</Text>
      </View> 
      
      <SearchInput/>
      
      <FlatList
           data={lists}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           style={{marginTop: 25}}/>
      <ScrollView>
      <View style={styles.footer}>
      
      </View>
      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 10,
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20
  },
  footer: {
    marginTop: 15,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
  },
});