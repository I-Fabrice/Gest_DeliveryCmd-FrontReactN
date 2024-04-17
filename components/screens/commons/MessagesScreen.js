import React, { useState } from "react";
import { View, Text, Dimensions,ScrollView } from "react-native";
//import { KeyboardAvoidingView } from "react-native";

import ChatHeader from "../../util/commons/ChatHeader";
import ChatInput from "../../util/commons/ChatInput";
import MessageBubble from "../../util/commons/MessageBubble";

const MessagesScreen = ({ navigation, route }) => {
	const { username, bio, picture, isBlocked, isMuted } = route.params;
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

	return (
		<View style={{ flex: 1, alignContent: 'flex-start',justifyContent: "space-between"}}>
			
			<ChatHeader
				onPress={() => {}}
				username={username}
				picture={picture}
				onlineStatus={'Online'}
			/>		
			<View style={{flex:1}}>
			    <ScrollView>
				<MessageBubble
				  mine
				  text="Hello"/>
				<MessageBubble
				  text="Hello, Fabrice"/>
				<MessageBubble
				  mine
				  text="How are you?"/>
				<MessageBubble
				  text="I'm fine and you?"/>
				<MessageBubble
				  mine
				  text="I'm good"/>
				<MessageBubble
				  text="What's news?"/>
				<MessageBubble
				  mine
				  text="Nothing special and you"/>
				<MessageBubble
				  text="Idem bro"/>
				<MessageBubble
				  mine
				  text="what about your family"/>
				<MessageBubble
				  text="They are good"/>
				</ScrollView>
			</View>
			
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={username} />
			
			
			
		</View>
		
	);
};

export default MessagesScreen;
