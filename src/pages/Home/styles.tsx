import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroud:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    padding: 24,
  },

  header:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },

  logo:{
    width:88,
    height:88,
    borderRadius:100,
    borderColor:'#F08080',
    borderWidth:2
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#F08080',
    fontSize: 22,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 8,
  },

  text: {
    color: '#F08080',
  },

  middle:{
    alignSelf:'center',
    paddingTop:20,
    overflow:'hidden'
  },

  social:{
    flexDirection:'row',
    justifyContent:'space-around',
    overflow:'hidden',
    marginTop:8,
  },

  footer: {
    flexDirection:'row',
    justifyContent:'space-around',
    overflow:'hidden',
    marginTop:8,
  },

  input: {
    height: 18,
    color:'gray',
    paddingHorizontal: 8,
    fontSize: 18,
  },

  buttonSolid: {
    backgroundColor: '#F08080',
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonGoogle: {
    width:144,
    borderColor:'gray',
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    flexDirection:'row',
    justifyContent:'space-around'
  },

  buttonFacebook: {
    width:144,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    flexDirection:'row',
    justifyContent:'space-around'
  },

});