import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { FontAwesome as Icon } from '@expo/vector-icons';
import Colors from "../constants/Colors";


import { getDrawerItemsList, arrayToObject } from '../tools/utils';
import { DrawerHeader, DrawerFooter } from '../Components/DrawerHeader';
import OuterDrawerItem from "./OuterDrawerItem";
import DrawerItem from "./DrawerItem";
import styles from '../tools/styles';


export default class MenuDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mainDrawer: true,
            currentComponent: ""
        }
    }


    _displayMainDrawer = (itemList) => (
        Object.keys(itemList).map((item) => (
            <OuterDrawerItem
                label={item}
                onPress={() => {
                    this.setState({
                        mainDrawer: false,
                        currentComponent: item
                    })
                }}
            />
        )
        )
    )

    _displaySubDrawer = (items) => (
        Object.keys(items).map((item) => (
            <DrawerItem
                item={item}
                navigation={this.props.navigation}
            />
        )
        )
    )

    _displayConstItems = (navigation, item, iconName ) => (
        <TouchableOpacity onPress={() => navigation.navigate(item)} >
            <View style={styles.list}>
                <Icon name={iconName} size={20} />
                <Text style={styles.link}>
                    {item}
                </Text>
            </View>
        </TouchableOpacity>
    )

    navigateToCallback = () => {
        this.setState({
            mainDrawer: true
        })
    }


    render() {
        const drawerItemsList = getDrawerItemsList(this.props.navigation._childrenNavigation)
        console.log(drawerItemsList)
        
        if (this.state.mainDrawer) {
            return (

                <View style={styles.container}>

                    <DrawerHeader />

                    <View style={styles.bottomLinks}>
                        {this._displayConstItems(this.props.navigation, "Accueil", "home")}
                        {this._displayMainDrawer(drawerItemsList)}
                        {this._displayConstItems(this.props.navigation, "Paramètres", "gear")}
                    </View>

                    <DrawerFooter />
                </View>


            )
        }

        else {
            var itemsArray = arrayToObject(drawerItemsList[this.state.currentComponent])

            return (
                <View style={styles.container}>
                    <View>
                        <DrawerHeader />
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                mainDrawer: true
                            })
                        }}>
                            <View style={styles.list} >
                                <Icon name="chevron-left" size={20} />
                                <Text style={{ color: Colors.desactivateColor, ...styles.link }}  >
                                    Retour au menu principal
                                </Text>
                            </View>
                            <View style={styles.separation}></View>
                        </TouchableOpacity>

                        {this._displaySubDrawer(itemsArray)}

                    </View>

                    <DrawerFooter />
                </View>
            )
        }


    }

}

