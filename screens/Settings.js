import  React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";



class Settings extends Component {
	render() {
		return (
            <View style={styles.container}>
				<Text style = { styles.text }>Modifier mes paramètres et informations personneles</Text>
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
		fontSize: 30,
		textAlign: "center"
	}
});




const SettingsStackNavigator = createStackNavigator({
    Centre: {
        screen: Settings,
        navigationOptions: {
            title: "Paramètres"
        }
    }
})

export default createAppContainer(SettingsStackNavigator)