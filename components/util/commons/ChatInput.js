import React, { useState, useEffect, useRef, memo} from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";


import Ionicons from '@expo/vector-icons/Ionicons';

import { theme } from "./Theme";

const ChatInput = ({ reply, closeReply, isLeft, username }) => {
  
  return (
    <View style={[styles.container]}> 
      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicrophone}>
          <TouchableOpacity
            style={styles.emoticonButton}
            onPress={() => setShowEmojiPicker((value) => !value)}
          >
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder={"Type something..."}
            style={styles.input}
          />
          <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Ionicons 
            name="document"
              size={23}
              color={theme.colors.description}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Ionicons 
            name="camera"
            size={23}
            color={theme.colors.description}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons
          name="send"
          size={20}
          color={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
    
    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  replyContainer: {
    paddingHorizontal: 10,
    marginHorizontal:  10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    marginTop: 5,
    fontWeight: "bold",
  },
  closeReply: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  reply: {
    marginTop: 5,
  },
  innerContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  inputAndMicrophone: {
    flexDirection: "row",
    backgroundColor: theme.colors.inputBackground,
    flex: 3,
    marginRight: 10,
    paddingVertical: Platform.OS === "ios" ? 10 : 0,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "transparent",
    paddingLeft: 20,
    color: theme.colors.inputText,
    flex: 3,
    fontSize: 15,
    height: 30,
    alignSelf: "center",
  },
  rightIconButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
  },
  swipeToCancelView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  },
  swipeText: {
    color: theme.colors.description,
    fontSize: 15,
  },
  emoticonButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  recordingActive: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  recordingTime: {
    color: theme.colors.description,
    fontSize: 20,
    marginLeft: 5,
  },
  microphoneAndLock: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  lockView: {
    backgroundColor: "#eee",
    width: 60,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 130,
    paddingTop: 20,
  },
  sendButton: {
    backgroundColor: "#007aff",
    borderRadius: 40,
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatInput;

