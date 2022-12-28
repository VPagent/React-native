import { useEffect } from "react"
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getAllItems } from "../../redux/operations"
import { Item } from "../../types"
import Card from "../Card"

const List:React.FC = () => {
    
    const items:Item[] = useSelector((state:any) => state.items)

    return(
    
        <FlatList style={styles.list}  data={items} renderItem={({item}) => (
            <Card item={item} />)}
        />
    )
}

const styles = StyleSheet.create({
    list:{
        display: "flex",
        flexDirection: "column",
        width: "100%"

    },
    
})


export default List