import React, {Component} from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { Avatar, Divider, Icon  } from 'react-native-elements';

import Gallery from './Tabs/Gallery'
import House from './Tabs/House'
import Pets from './Tabs/Pets'
import styles from './styles';

function Welcome({navigation}) {

    const [pets,setPets] = React.useState([{
        uri:require('../../assets/exemplo-cachorro.png'),
        name:'Steve',
        gender:'Male',
        rating:5,
        feature:['brincalhao','animado','divertido'],
    },
    {
        uri:require('../../assets/exemplo-gato.png'),
        name:'Maya',
        gender: 'Female',
        rating:4.5,
        feature:['independente', 'seria', 'atensiosa'],
    },
    ]);

    const [local,setLocal] = React.useState({
        cep:'',
        state:'',
        city:'',
        nb:'',
        street:'',
        disabled:true,
    })

    const [openGallery,setOpenGallery] = React.useState(false);
    const [openHouse,setOpenHouse] = React.useState(false);
    const [openPets,setOpenPets] = React.useState(true);

    return(
        <ImageBackground style={styles.backgroud} source={require('../../assets/background02.png')} imageStyle={{opacity:0.1}}>
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                    <Icon raised name='bars' type='font-awesome' color='#F08080'size={16} onPress={() => navigation.openDrawer()} />
                <View style={styles.headerIcon}>
                    <Avatar avatarStyle={{borderRadius:100,borderColor:'gray', borderWidth:1}} size="large" rounded source={require('../../assets/avatar.png')}/>
                </View>
                <Text style={styles.title}>Nivy Stephan</Text>
            </View>
            <Divider style={{ backgroundColor: '#F08080', height:1.4 }} />
            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => { setOpenGallery(true), setOpenHouse(false), setOpenPets(false)}}>
                    <Text style={styles.tab}>Galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setOpenHouse(true), setOpenGallery(false), setOpenPets(false) }}>
                    <Text style={styles.tab}>Local</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setOpenPets(true), setOpenGallery(false), setOpenHouse(false) }}>
                    <Text style={styles.tab}>Pets</Text>
                </TouchableOpacity>
            </View>
            {   
                openGallery?
                    <Gallery />:
                    openHouse?
                        <House local={local} setLocal={setLocal}/>:
                        openPets?
                            <Pets pets={pets} />:
                            null
            }
        </ScrollView>
        </ImageBackground>
        )
    };

export default Welcome;
