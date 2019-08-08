import React, { Component } from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import { Platform, Dimensions } from "react-native";


//  Importation des screens
import screens from './screenMapping';



import MenuDrawer from '../Components/MenuDrawer';
const WIDTH = Dimensions.get("window").width;

const drawerConfigs = {
    drawerWidth : WIDTH * 0.83,
    contentComponent: ({ navigation }) => {
        return(
            <MenuDrawer navigation = { navigation }/>
        )
    }
}



const DrawerNavigator = createDrawerNavigator(
    { ...screens },
    drawerConfigs
)


export default createAppContainer(DrawerNavigator)