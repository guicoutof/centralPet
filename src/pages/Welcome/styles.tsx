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
    flex:1,
    // alignItems:'center',
    // justifyContent:'space-around',
    margin:4,
  },

  headerIcon:{
    flexDirection:'row',
    justifyContent:'center',
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

  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  title: {
    color: '#F08080',
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 8,
    textAlign: 'center'
  },

  text: {
    color: '#F08080',
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

});