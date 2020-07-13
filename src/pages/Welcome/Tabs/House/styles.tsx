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

  buttonEdit: {
    margin: 16,
    width: 72,
    borderRadius: 5,
    justifyContent:'space-evenly',
  },

  buttonSave: {
    width:120,
    alignSelf:'center',
    margin: 16,
    borderRadius: 5,
    justifyContent:'space-around',
    marginBottom:50,
    borderColor:'mediumseagreen'
  },

});