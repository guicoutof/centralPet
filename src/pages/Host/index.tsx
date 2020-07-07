import React, { useState } from 'react'
import { View,
    Image,
    Text,
    ImageBackground,
    ScrollView,
    Alert,
    Modal,
    TouchableHighlight,
 } from 'react-native'
import { Rating, Icon } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import styles from './styles'

function Host({ route, navigation}){

    const { host } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);
    const disponibility=[
        '2020-07-03',
        '2020-07-04',
        '2020-07-05',
        '2020-07-10',
        '2020-07-11',
        '2020-07-12',
    ]
    
    return(
        <ImageBackground style={styles.backgroud} source={require('../../assets/background02.png')} imageStyle={{opacity:0.1}}>
        <View style={styles.container}>
            <ScrollView style={styles.main}>
                <Icon raised style={{marginRight:'auto'}} name='long-arrow-left' type='font-awesome' color='#F08080' onPress={()=> navigation.goBack()} />
                <View style={styles.header}>
                    <Image style={styles.logo} source={host.uri}/>
                    <Text style={styles.title} >{host.name}</Text>
                    <Rating  type="star" imageSize={22} readonly startingValue={host.rating} />
                </View>
                <View style={styles.mainInterest}>
                    <View>
                        <Text style={styles.subTitle}>Interesse</Text>
                        <View style={styles.infoInterest}>
                            {
                                host.care.map((pet,key)=>(
                                    <Text key={key} style={{paddingRight:8, color: 'gray'}}>{pet}</Text>
                                    ))
                                }
                        </View>
                    </View>
                    <View style={styles.infoPrice}>
                        <Text style={styles.subTitle}>Preço</Text>
                        <Text style={styles.price}>{`R$ ${host.price}/d`}</Text>
                    </View>
                </View>
                <View style={styles.calendar}>
                    <View style={styles.mainCalendar}>
                        <Text style={styles.subTitle}>Disponibilidade</Text>
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
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.title}>Reservar</Text>
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

                            onDayPress={(day) => {
                                if(disponibility.includes(day.dateString))
                                setModalConfirm(!modalConfirm);
                                else Alert.alert('Data indisponivel')
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
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalConfirm}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.title}>Deseja confirmar sua reserva ?</Text>
                            <View style={styles.rowConfirm}>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "green" }}
                                onPress={() => { Alert.alert('Solicitação de reserva confirmada'),
                                    setModalConfirm(!modalConfirm);
                                }}
                                >
                                <Text style={styles.textStyle}>Confirmar</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "red" }}
                                onPress={() => {
                                    setModalConfirm(!modalConfirm);
                                }}
                                >
                                <Text style={styles.textStyle}>Cancelar</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        </View>
                    </Modal>
                    <View style={styles.calendarReserv}>
                        <Text style={styles.subTitle}>Reservar</Text>
                        <Icon reverse name='calendar' type='font-awesome' color='#283593' size={18} onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                    <View style={styles.comments}>
                        <Text style={styles.subTitle}>Comentários</Text>
                        <Text  style={{paddingVertical:8, color: 'gray'}}>Nenhum comentário por enquanto</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default Host;
