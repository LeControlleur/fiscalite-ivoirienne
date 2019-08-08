import  React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../../constants/Colors";



export default class Activites extends Component {
	render() {
		return (
            <View style={styles.container}>
				<Text style = { styles.text }>Activités</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.tabBar,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30
	}
});
