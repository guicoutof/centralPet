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

  main:{
    flex:1,
    backgroundColor: 'white',
    borderRadius:10,
    padding:8
  },

  header:{
    alignItems:'center',
    marginBottom: 16,
  },

  logo:{
    width:88,
    height:88,
    borderRadius:100,
    borderColor: 'gray',
    borderWidth:2
  },

  title: {
    fontSize: 22,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 8,
  },
  
  subTitle: {
    fontSize: 18,
  },

  text: {
    color: '#F08080',
  },

  mainInterest:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 8,
    marginBottom:8
  },
  
  infoInterest:{
    width: 160,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  infoPrice:{
    alignItems: 'center'
  },

  price:{
    color:'#283593',
    fontSize: 22,
  },
  
  calendar:{
    flex:1,
  },

  mainCalendar:{
    

  },

  calendarReserv:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    maxHeight: 40
  },

  comments:{
    marginTop: 16,
    alignItems:'center'
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
  rowConfirm:{
    padding:20,
    width:250,
    flexDirection:'row',
    justifyContent:'space-around',
  }
});