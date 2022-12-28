import {styles} from './styles'
import { Image, Text, View, TouchableOpacity } from "react-native"
import { Item } from "../../types"
import {useNavigate} from 'react-router-dom'


type Props = {
    item: Item
}

const Card:React.FC<Props> = ({item}) => {

    const navigate = useNavigate()

    return(
        <TouchableOpacity onPress={() => navigate(`${item.id}`)}>
        <View key={item.id} style={styles.card}>
            <Image
                style={styles.image}
                source={{uri: item?.urls?.thumb}}
            />
            <Text>{item.alt_description ? item.alt_description : 'No Name'}</Text>
            <Text> {item.user.name}</Text>
        </View>
        </TouchableOpacity>
        
    )
}


export default Card