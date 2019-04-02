import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { connect } from 'react-redux'
import auth from '../Redux/LoginRedux'
import LoginButton from '../Components/LoginButton'
import DrawerHandle from '../Components/DrawerHandle'

import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {

  onEmailInput (text){
    this.props.emailIn(text)
  }

  onPwInput (text){
    this.props.passIn(text)
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  openLogin = () => {
    this.props.navigation.navigate('PostLoginScreen')
  }

  /*onButtonPress = () => {
    this.props.logIn(this.props.email, this.props.password, this.props.navigation)
  }*/
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DrawerHandle onPress={()=>this.props.navigation.openDrawer()}/>
          <View style={styles.container}>
            <Image style={styles.bgImage} source={require('../Images/squares.jpg')}/>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    value = {this.props.email}
                    onChangeText={this.onEmailInput.bind(this)}/>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
             </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={this.onPwInput.bind(this)}/>
              <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
            </View>

            <TouchableOpacity style={styles.btnForgotPassword} onPress={() => this.onClickListener('restore_password')}>
                <Text style={styles.btnText}>Forgot your password?</Text>
            </TouchableOpacity>

            <LoginButton onPress={()=>this.openLogin()}/>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}


const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
    return { email, password }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emailIn: (text) => dispatch(auth.emailIn(text)),
    passIn: (text) => dispatch(auth.passIn(text)),
    logIn: (email, password) => dispatch(auth.logIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
