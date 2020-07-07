import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  row:{
    flex:1,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
  
  petInfo:{
    flex: 1,
    flexDirection: "column",
  },

  petGender:{
    alignSelf:'flex-start',
    paddingHorizontal: 30,
  },

  petHeader:{
    flex:1,
    flexDirection: "row",
    justifyContent:'space-around',
    alignItems:'center',
  },

  petName:{
    color: '#283593',
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
  },

  petStatus:{
    flex:1,
    flexDirection: "row",
    justifyContent:'space-evenly',
    padding: 2,
    flexWrap:'wrap'
}

});