import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        flexDirection: "column",
        justifyContent: "space-between",
        fontSize: 20
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: 10,
        paddingBottom: 450
    },
    description: {
        flex: 1,
        fontSize: 17,
        textAlign: "center"
    },
    list: {
        height: 50,
        marginLeft: 20,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: "left"
    },
    profile: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: Colors.noticeText
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginLeft: 15
    },
    imgView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    profileText: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center"
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        paddingLeft: 20,
        color: Colors.profile.text,
        textAlign: "left"
    },
    login: {
        paddingBottom: 5,
        paddingLeft: 20,
        textAlign: "left",
        fontSize: 15,
        color: Colors.profile.text
    },
    topLinks: {
        height: 160,
        backgroundColor: Colors.profile.background
    },
    footer: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        color: Colors.noticeText,
        backgroundColor: Colors.desactivateColor,
        borderTopWidth: 1,
        borderTopColor: Colors.noticeText
    },
    separation: {
        height: 1,
        backgroundColor: Colors.desactivateColor,
        margin: 5
    }
})
