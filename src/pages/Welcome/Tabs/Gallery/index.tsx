import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

function Gallery(props){
    return(
        <View style={styles.main}>
            <Icon style={{marginLeft:'auto'}} raised name='plus' type='font-awesome' color='green'size={16} onPress={ () => {} }/>
            <Text style={styles.content}>Sem imagens</Text>
        </View>
    )
}

export default Gallery;