import { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import List from "../../components/List"
import { getAllItems } from "../../redux/operations"





const HomePage:React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      //@ts-ignore
      dispatch(getAllItems())
    }, [])
    return(
        <View>
        <Text style={styles.title}>Welcome to HomePage</Text>
        <List />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        marginBottom: 20,
        marginLeft: 10,
        color: "white",
        fontSize:25,
        fontWeight: "bold"
    }
})

export default HomePage