import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';

const SearchInput = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
                <Ionicons name="search" size={20} color={'#999'}/>
				<TextInput style={styles.input} placeholder="Search" maxLength={10} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: -1,
		paddingVertical: 20,
		paddingHorizontal: 30,
		borderBottomWidth: 1,
		borderColor: "#DCDCDC"
	},
	row: {
		backgroundColor:  '#E0E0E0',
		flexDirection: 'row',
		borderRadius: 15,
		height: 45,
		alignItems: 'center',
		paddingHorizontal: 10
	},
	input: {
		paddingHorizontal: 30,
		fontSize: 15,
		height: 45,
		flex: 1,
		color: '#444'
	}
});

export default SearchInput