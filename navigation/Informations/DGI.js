import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../../Components/TabBarIcon';
import PubScreen from '../../screens/informations/DGI/Pub';
import ListeScreen from '../../screens/informations/DGI/Liste';
import FoireScreen from '../../screens/informations/DGI/Foire';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const PubStack = createStackNavigator(
    {
        Pub: PubScreen,
    },
    config
);

PubStack.navigationOptions = {
    tabBarLabel: 'Publications',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : `md-information-circle${focused ? '' : '-outline'}`
            }
        />
    ),
};

PubStack.path = '';

const ListeStack = createStackNavigator(
    {
        Liste: ListeScreen,
    },
    config
);

ListeStack.navigationOptions = {
    tabBarLabel: 'Liste des pièces',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-list${focused ? '-box' : ''}`
                    : `md-list${focused ? '-box' : ''}`
            }
        />
    ),
};

ListeStack.path = '';

const FoireStack = createStackNavigator(
    {
        Foire: FoireScreen,
    },
    config
);

FoireStack.navigationOptions = {
    tabBarLabel: 'FAQ',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-help-circle${focused ? '' : '-outline'}`
                    : `md-help-circle${focused ? '' : '-outline'}`
            }
        />
    ),
};

FoireStack.path = '';

const tabNavigator = createBottomTabNavigator({
    PubStack,
    ListeStack,
    FoireStack,
});

tabNavigator.path = '';

export default tabNavigator;
