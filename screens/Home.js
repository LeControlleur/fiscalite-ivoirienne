import  React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";



class Home extends Component {
	render() {
		return (
            <View style={styles.container}>
				<Text style = { styles.text }>Bienvenue sur la seule application du e-CONSEIL FISCAL en Côte d'Ivoire</Text>
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



const HomeStackNavigator = createStackNavigator({
    Centre: {
        screen: Home,
        navigationOptions: {
            title: "Accueil"
        }
    }
})

export default createAppContainer(HomeStackNavigator)