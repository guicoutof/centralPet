import React from 'react';
import { ScrollView, View, Image, Text, ImageBackground } from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';


function Home({ navigation }){

    const [email,setEmail] = React.useState('email')
    const [password,setPassword] = React.useState('senha')

    function nextPage(){
        navigation.navigate('Drawer', {screen: 'Welcome'} )
    }


    return (
        <ImageBackground style={styles.backgroud} source={require('../../assets/background02.png')} imageStyle={{opacity:0.1}}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../../assets/background-logo.png')}/>
                    <Text style={styles.title} >Central Pet</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.text} >Email</Text>
                    <Input inputStyle={styles.input} autoCompleteType='email' placeholder='exemplo@email.com' value={email} onChangeText={event => setEmail(event)}  />
                    <Text style={styles.text} >Senha</Text>
                    <Input inputStyle={styles.input} secureTextEntry={true} 
                    rightIcon={
                        <Icon
                        name='eye'
                        size={24}
                        color='gray'/>
                        }
                    value={password} onChangeText={password => setPassword(password)} />
                    <Button buttonStyle={styles.buttonSolid}title="Entrar" onPress={() => nextPage()}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.text} >ou use suas redes sociais</Text>
                </View>
                <View style={styles.social}>
                    <Button buttonStyle={styles.buttonGoogle} titleStyle={{color:'gray'}} title="Google" 
                        icon={
                            <Icon
                            name="google"
                            size={15}
                            color="#696969"
                            />
                        }
                        type="outline" onPress={() => nextPage()}/>
                    <Button buttonStyle={styles.buttonFacebook} title="Facebook" 
                        icon={
                            <Icon
                            name="facebook"
                            size={15}
                            color="white"
                            />
                        }
                        onPress={() => nextPage()}/>
                </View>
                <View style={styles.footer}>
                    <Button titleStyle={{color:'#F08080'}} title="Cadastre-se" type="clear" onPress={() => nextPage()}/>
                    <Button titleStyle={{color:'gray'}} title="Esqueceu sua senha ?" type="clear" onPress={() => nextPage()}/>
                </View>
            </ScrollView>
        </ImageBackground>
        )
  
};

export default Home;