import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  content:{
    padding: 10,
    paddingVertical: 20,
    textAlign: 'center',
  },
  
  text: {
    color: '#F08080',
    paddingHorizontal: 24,
  },

  input: {
    height: 18,
    color:'gray',
    paddingHorizontal: 8,
    fontSize: 18,
  },

  button: {
    margin: 16,
    borderColor:'gray',
    borderRadius: 5,
    justifyContent:'space-around'
  },

  buttonSave: {
    width:200,
    alignSelf:'center',
    margin: 16,
    backgroundColor:'mediumseagreen',
    borderRadius: 5,
    justifyContent:'space-around',
    marginBottom:50,
  },

});