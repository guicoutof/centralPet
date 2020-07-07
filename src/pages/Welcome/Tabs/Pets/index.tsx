import React from 'react'
import { View, Text } from 'react-native'
import { Avatar, Divider, Rating, Icon  } from 'react-native-elements';
import styles from './styles';

function Pets(props){
    return(
    <View style={styles.main}>
        <Icon style={{marginLeft:'auto'}} raised name='plus' type='font-awesome' color='green'size={16} onPress={() => console.log('hello')} /> 
        {
            props.pets.map((pet,key)=>(
                <View key={key} style={{padding:8}}>
                    <View style={styles.row}>
                        <Avatar avatarStyle={{borderRadius:100,borderColor:'gray', borderWidth:1}} size="medium" rounded source={pet.uri}/>
                        <View style={styles.petInfo}>
                            <View style={styles.petHeader}>
                                <Text style={styles.petName}>{pet.name}</Text>
                                <Rating  type="heart" imageSize={20} readonly startingValue={pet.rating} />
                            </View>
                            <View style={styles.petGender}>
                                <Text style={{color:'gray'}}>{pet.gender}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.petStatus}>
                    {pet.feature.map((f,key)=>(
                        <Text key={key} style={{paddingHorizontal:2}}>{f}</Text>
                    ))}
                    </View>
                    <Divider style={{ backgroundColor: 'gray' }} />
                </View>
            ))
        }
    </View>
    )
}

export default Pets;