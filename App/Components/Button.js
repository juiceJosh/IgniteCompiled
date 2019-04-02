import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonStyle'

export default class Button extends Component {
   
    static propTypes = {
      onPress: PropTypes.func,
      text: PropTypes.string,
      children: PropTypes.string,
      navigator: PropTypes.object
    }
  
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        ); 
    }
};
