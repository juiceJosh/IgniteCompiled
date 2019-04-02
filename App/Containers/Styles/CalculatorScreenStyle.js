import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  cardContainer: {
    flex: 1,
  },

  resultHolderstyle:{
    flex: 2.5,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: Colors.clear
  },

  numberStyle:{
    flexDirection: 'row',
    color: Colors.frost,
    fontWeight: '500',
    fontSize: 36,
    paddingTop: 45,
    paddingBottom: 50,
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
  },

  inputHolderStyle:{
    flex: 3,
    backgroundColor: '#5E7496',
    flexDirection: 'row'
  },

  inputStyle:{
    flex: 1,
    color: 'white',
    backgroundColor: '#6697A7',
    borderWidth: 0.5,
    borderColor: '#E4E2E9',
    fontWeight: '300',
    fontSize: 32,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  buttonContainerStyle:{
    flex: 3,
    flexDirection: 'row'
  },

  buttonRStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#515689',
    borderWidth: 0.5,
    //borderHeight: 0.5,
    borderRadius: 3,
    borderColor: '#555555'
}
})
