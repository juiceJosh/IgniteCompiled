import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WelcomeScreenStyle'
import DrawerHandle from '../Components/DrawerHandle';

class WelcomeScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}> 
        <DrawerHandle onPress={()=>this.props.navigation.openDrawer()}/>
         <View style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <Text style={styles.textStyle} >Hello World</Text>
          </KeyboardAvoidingView>
         </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
