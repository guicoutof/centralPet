import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroud:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  
  container: {
    flex: 1,
    padding: 16,
  },

  header:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    margin:4,
  },

  main: {
    flex: 1,
    padding:8,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius:10,
  },

  title: {
    color: '#F08080',
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
    marginBottom: 16,
  },

  text: {
    color: '#F08080',
  },

  host:{
    flex: 1,
    flexDirection: "column",
    justifyContent:'flex-start',
    height:125,
    maxHeight:125,
    minHeight:125,
    overflow:'hidden',
    flexWrap:'wrap'
  },

  hostCard:{
    flex: 1,
    flexDirection: "row",
    padding: 4,
  },

  hostInfo:{
    flex: 1,
    flexDirection: "column",
    alignItems:'flex-start',
    paddingTop:12
  },

  hostHeader:{
    flex: 1,
    flexDirection: "column",
    justifyContent:'space-around',
    alignItems:'center',
  },
  
  hostsCares:{
    flex:1,
    flexDirection: "row",
  },
  
  carePets:{
    color:'gray',
    paddingHorizontal:6,
    flexWrap: 'wrap',
  },
  
  hostPrice:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  },
  
  price:{
    color:'#283593',
    fontSize: 24,
  },

  column:{
    flex: 1,
    flexDirection: "column",
  },

  row:{
    flex:1,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },


  tabBar:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 2,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#d4d4d4'
  },

  tab:{
    padding: 10,
    textAlign: 'center'
  },

});