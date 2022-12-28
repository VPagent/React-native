import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    page:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    pageTitle:{
        marginBottom: 20,
        marginLeft: 10,
        color: "white",
        fontSize:25,
        fontWeight: "bold"
    },
    card:{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 320, 
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    btn:{
        position: "absolute",
        top: 0,
        left: 20,
        zIndex: 1
    },
    image:{
        display: "flex",
        width: 320,
        height: 320,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textWrapper:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,

    },
    title:{
        fontSize: 20,
        fontWeight: "bold",

        marginBottom: 10,
    },

})