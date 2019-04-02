import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D101C',
  },
  textStyle: {
    fontSize: 18,
    color: 'red',
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom:20,
    marginTop:20,
  },
  textStyle2: {
    fontSize: 18,
    color: 'red',
    justifyContent: 'center', 
    alignItems: 'center',
       
  },
  textContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    marginTop:20,
    marginLeft: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',

    shadowColor: "pink",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})
