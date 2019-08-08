import React, { Component } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from "react-native";
import { getIconName } from '../tools/utils';

import styles from '../tools/styles';
import { FontAwesome as Icon } from "@expo/vector-icons";


class OuterDrawerItem extends Component {

    render() {
        var iconName = getIconName(this.props.label)

        return (
            <TouchableOpacity onPress={this.props.onPress} >
                <View style={styles.list}>
                    <Icon name={iconName} size={20} />
                    <Text style={styles.link}>
                        {this.props.label}
                    </Text>
                    <Icon name="chevron-right" size={20}/>
                </View>
            </TouchableOpacity>
        )
    }
}


export default OuterDrawerItem