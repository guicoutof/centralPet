import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Button, Input, Icon } from 'react-native-elements';

import styles from './styles';


function House(props){

    const [localEdit,setLocalEdit] = React.useState(props.local)

    return(
        <View style={styles.main}>
            <Button buttonStyle={styles.button} titleStyle={{color:'gray'}} title="Usar minha localização" 
                icon={
                    <Icon
                    name="location-arrow"
                    type='font-awesome'
                    size={15}
                    color="#F08080"
                    />
                }
                type="outline" onPress={() => {} }
            />
            <Icon raised name='edit' type='font-awesome' color='blue'size={16} onPress={() => { 
                const newLocal = {
                    cep:localEdit.cep,
                    state:localEdit.state,
                    city:localEdit.city,
                    nb:localEdit.nb,
                    street:localEdit.street,
                    disabled:false
                }
                setLocalEdit(newLocal)
             } } /> 
            <Text style={styles.text} >CEP</Text>
            <Input inputStyle={styles.input} disabled={localEdit.disabled} placeholder='19060440' value={localEdit.cep} onChangeText={event => { 
                const newLocal = {
                    cep:event,
                    state:localEdit.state,
                    city:localEdit.city,
                    nb:localEdit.nb,
                    street:localEdit.street,
                    disabled:localEdit.disabled
                }
                setLocalEdit(newLocal)
             }}  />
            <Text style={styles.text} >Estado</Text>
            <Input inputStyle={styles.input} disabled={localEdit.disabled} placeholder='Sao Paulo' value={localEdit.state} onChangeText={event => { const newLocal = {
                    cep:localEdit.cep,
                    state:event,
                    city:localEdit.city,
                    nb:localEdit.nb,
                    street:localEdit.street,
                    disabled:localEdit.disabled
                }
                setLocalEdit(newLocal) }}  />
            <Text style={styles.text} >Cidade</Text>
            <Input inputStyle={styles.input} disabled={localEdit.disabled} placeholder='Presidente Prudente' value={localEdit.city} onChangeText={event => { const newLocal = {
                    cep:localEdit.cep,
                    state:localEdit.state,
                    city:event,
                    nb:localEdit.nb,
                    street:localEdit.street,
                    disabled:localEdit.disabled
                }
                setLocalEdit(newLocal) }}  />
            <Text style={styles.text} >Bairro</Text>
            <Input inputStyle={styles.input} disabled={localEdit.disabled} placeholder='Jd Campo Belo' value={localEdit.nb} onChangeText={event => { 
                const newLocal = {
                    cep:localEdit.cep,
                    state:localEdit.state,
                    city:localEdit.city,
                    nb:event,
                    street:localEdit.street,
                    disabled:localEdit.disabled
                }
                setLocalEdit(newLocal)
             }}  />
            <Text style={styles.text} >Rua</Text>
            <Input inputStyle={styles.input} disabled={localEdit.disabled} placeholder='Artur Whitaker, 60' value={localEdit.street} onChangeText={event => { 
                const newLocal = {
                    cep:localEdit.cep,
                    state:localEdit.state,
                    city:localEdit.city,
                    nb:localEdit.nb,
                    street:event,
                    disabled:localEdit.disabled
                }
                setLocalEdit(newLocal)
             }}  />
            <Button buttonStyle={styles.buttonSave} titleStyle={{color:'white'}} title="Salvar" 
                icon={
                    <Icon
                    name="save"
                    size={15}
                    color="white"
                    />
                }
                onPress={() => { 
                    const newLocal = {
                        cep:localEdit.cep,
                        state:localEdit.state,
                        city:localEdit.city,
                        nb:localEdit.nb,
                        street:localEdit.street,
                        disabled:true
                    }
                    setLocalEdit(newLocal)
                    props.setLocal(localEdit)
                    Alert.alert('Endereço atualizado')
                }}
            />
        </View>
    )
}

export default House;