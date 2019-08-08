import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";
import styles from '../tools/styles';

//  Importation de la fonction d'évaluation du titre des vues
import { evaluateChildDrawerTitle } from "../tools/utils";



class DrawerItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var item = evaluateChildDrawerTitle(this.props.item)

        return (
            <TouchableOpacity onPress={() => {
                this.setState({
                    mainDrawer: true
                })
                this.props.navigation.navigate(this.props.item)
            }
            }>
                <View style={styles.list}>
                    <Text style={styles.link}>
                        {item}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default DrawerItem;
