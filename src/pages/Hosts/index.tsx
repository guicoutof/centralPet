import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, TouchableHighlight, Modal, Alert } from 'react-native'
import { Avatar, Rating, Divider, Icon } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

import styles from './styles'

LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
    dayNamesShort: ['D','S','T','Q','Q','S','S'],
    today: 'Aujourd\'hui'
  };
LocaleConfig.defaultLocale = 'br';

function Hosts({props,navigation}){

    const [hosts,setHosts] = React.useState([
        {
            name:'Cecilia Campos',
            uri:require('../../assets/ceci.png'),
            price:50,
            care:['dogs','cats'],
            rating:5,
            date:'',
        },
        {
            name:'Enaldo Lopes',
            uri:require('../../assets/enaldo.png'),
            price:48,
            care:['dogs'],
            rating:4.5,
            date:'',
        },
    ])

    const [modalVisible,setModalVisible] = React.useState(false);

    const [openHistory,setOpenHistory] = React.useState(false);
    const [openSearch,setOpenSearch] = React.useState(true);
    const [openFavorite,setOpenFavorite] = React.useState(true);

    const viewSearch = (
    <View style={styles.main}>
        {
            hosts.map((host,key)=>(
                <TouchableOpacity  style={styles.host} key={key} onPress={()=> navigation.navigate('Host',{ host: host })}>
                    <View style={styles.hostCard}>
                        <View style={styles.hostHeader} >
                            <Avatar avatarStyle={{borderRadius:100,borderColor:'gray', borderWidth:1}} size="medium" rounded source={host.uri}/>
                            <Rating  type="star" imageSize={12} readonly startingValue={host.rating} />
                        </View>
                        <View style={styles.hostInfo}>
                            <Text>{host.name}</Text>
                            <View style={styles.hostsCares}>
                                {
                                    host.care.map((c,key)=>(
                                        <Text style={styles.carePets} key={key}>{c}</Text>
                                        ))
                                    }
                            </View>
                            <Icon raised name='calendar' type='font-awesome' color='#283593' size={18} onPress={() => setModalVisible(true)} />
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => setModalVisible(!modalVisible)}
                            >
                                <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Calendar
                                    // Collection of dates that have to be marked. Default = {}
                                    markedDates={{
                                        '2020-07-03': {selected: true},
                                        '2020-07-04': {selected: true},
                                        '2020-07-05': {selected: true},
                                        '2020-07-10': {selected: true},
                                        '2020-07-11': {selected: true},
                                        '2020-07-12': {selected: true},
                                    }}
                                    />

                                    <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                    >
                                    <Text style={styles.textStyle}>Fechar</Text>
                                    </TouchableHighlight>
                                </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.hostPrice}>
                            <Text style={styles.price}>{`R$ ${host.price}/d`}</Text>
                        </View>
                    </View>
                    <View>
                    </View>
                    <Divider style={{ backgroundColor: 'gray' }} />
                </TouchableOpacity >
            ))
        }
    </View>
    )

    const viewHistory = (
        <View style={styles.main}>
            <Text> Nenhum histórico encontrado </Text>
        </View>
    )

    const viewFavorite = (
        <View style={styles.main}>
            <Text> Nenhum favorito encontrado </Text>
        </View>
    )

    return(
        <ImageBackground style={styles.backgroud} source={require('../../assets/background02.png')} imageStyle={{opacity:0.1}}>
        <ScrollView style={styles.container}>
            <Icon raised style={{alignSelf:'flex-start'}} name='long-arrow-left' type='font-awesome' color='#F08080' onPress={()=> navigation.goBack()}/>
            <Text style={styles.title}>Hosts</Text>
            {
                openSearch?
                viewSearch:
                    openFavorite?
                    viewFavorite:
                        openHistory?
                        viewHistory:
                        null
            }
        </ScrollView>
        <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => { setOpenHistory(true), setOpenFavorite(false), setOpenSearch(false)}}>
                    <Icon style={styles.tab} name='history' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setOpenSearch(true), setOpenFavorite(false), setOpenHistory(false)}}>
                    <Icon style={styles.tab} name='search' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setOpenFavorite(true), setOpenHistory(false), setOpenSearch(false)}}>
                    <Icon style={styles.tab} name='star' />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}



export default Hosts;

