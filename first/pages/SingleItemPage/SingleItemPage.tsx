import { styles } from "./styles"
import { useEffect, useState } from "react"
import { useParams, useNavigate} from 'react-router-dom'
import { Text, View, Button, Image, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux"
import { Item } from "../../types"


const SingleItemPage:React.FC = () => {
    const items:Item[] = useSelector((state:any) => state.items)
    const [item, setItem] = useState<null | Item>(null)
    const {elemId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(items.length > 0){
            const currentItem = items.find(elem => elem.id === elemId)
            setItem(currentItem as Item)
        }
    }, [items])

    const handleBackBtn = () => {
        navigate('/')
    }

    return item && (
        <View style={styles.page}>
            <Text style={styles.pageTitle}>Welcome to Single Item Page</Text>
            <View style={styles.card}>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Back"  onPress={() => handleBackBtn()}/>
                </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={{uri: item?.urls?.full}}
                />
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{item?.alt_description}</Text>
                    <Text>{item?.user?.name}</Text>
                </View>
            </View>
        </View>
    )
}


export default SingleItemPage