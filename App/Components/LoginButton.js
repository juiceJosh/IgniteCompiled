import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/LoginButtonStyle'

export default class LoginButton extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  }
  
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress ={this.props.onPress}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
