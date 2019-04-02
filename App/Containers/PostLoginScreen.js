import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './Styles/PostLoginScreenStyle'

class PostLoginScreen extends Component { 
    
  render(){
    return (
        <View style={styles.viewstyle}> 
            <View style={styles.textContainer}>
                <Text style = {styles.textStyle2}>
                    Your Email Address: 
                </Text> 
                <Text style = {styles.textStyle2}>
                    {this.props.email}
                </Text>
            </View>
             <View style={styles.textContainer}>
                <Text style = {styles.textStyle}>
                Your Password is: {this.props.password}
                </Text>  
            </View>
        </View>  
    );
  }  
    
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth
    return { email, password }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLoginScreen)
