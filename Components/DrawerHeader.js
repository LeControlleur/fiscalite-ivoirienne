import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from "react-native";

import styles from "../tools/styles";



export class DrawerHeader extends Component {
    render() {
        return (
            <View style={styles.topLinks}>
                <View style={styles.profile}>
                    <View style={styles.imgView}>
                        <Image style={styles.img} source={require("../assets/profile.png")} />
                    </View>
                    <View style={styles.profileText}>
                        <Text style={styles.name}>
                            Bini Rachel
                        </Text>
                        <Text style={styles.login}>
                            rachelbini@yahoo.fr
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}





export class DrawerFooter extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <Text style={styles.description}>
                    Le Leader du e-CONSEIL FISCAL en Côte d'Ivoire
                </Text>
            </View>
        );
    }
}

