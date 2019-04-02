import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerHandleStyle'
import Icon from 'react-native-vector-icons/Ionicons'

export default class DrawerHandle extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  static propTypes = {
    onPress: PropTypes.func
  }
  render () {
    return (
        <TouchableOpacity style={styles.buttonDrawer} onPress={this.props.onPress}>
          <Icon name='md-menu' size={25}/>
        </TouchableOpacity>
    ) 
  }
}
