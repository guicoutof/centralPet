import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

function Gallery(props){
    return(
        <View style={styles.main}>
            <Text style={styles.content}>Sem imagens</Text>
        </View>
    )
}

export default Gallery;