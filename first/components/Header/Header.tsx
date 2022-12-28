import { Text, View, StyleSheet } from "react-native"




const Header:React.FC = () =>{

    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                Header
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    header:{
        paddingTop: 10,
        paddingBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Header