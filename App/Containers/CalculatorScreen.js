import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import operation from '../Redux/CalcuReduxRedux'
import Button from '../Components/Button'
import DrawerHandle from '../Components/DrawerHandle'
// Styles
import styles from './Styles/CalculatorScreenStyle'



class CalculatorScreen extends Component {

  onFirstInput (num){
    this.props.firstNumber(num)
  }
  onSecondInput (num){
    this.props.secondNumber(num)
  }

  delete =() => {this.props.clear(this.props.firstInput, this.props.secondInput)}
  
  adding = () => {this.props.sum(this.props.firstInput, this.props.secondInput)}
  
  subtract = () => {this.props.diff(this.props.firstInput, this.props.secondInput)}

  multiply = () => {this.props.prod(this.props.firstInput, this.props.secondInput)}

  divide = () => {this.props.quo(this.props.firstInput, this.props.secondInput)}
  
  render() {
    return(
      <View style={styles.cardContainer}>
      <DrawerHandle onPress={()=>this.props.navigation.openDrawer()}/>
        <View style={styles.resultHolderstyle}>
            <TouchableOpacity onPress={this.delete} style={styles.buttonRStyle}>
              <Text style={styles.numberStyle}>
                {this.props.result}
              </Text>
            </TouchableOpacity> 
        </View> 
        <View style ={styles.inputHolderStyle}>
            <TextInput 
            placeholder="Enter Value"
            keyboardType = {"number-pad"}
            style = {styles.inputStyle}
            value = {this.props.firstInput}
            onChangeText={this.onFirstInput.bind(this)}
            />
            <TextInput 
            placeholder="Enter Value"   
            keyboardType = {"number-pad"}
            style = {styles.inputStyle}
            value = {this.props.secondInput}
            onChangeText={this.onSecondInput.bind(this)} 
            />
        </View>      
        <View style = {styles.buttonContainerStyle}>
          <Button onPress={()=>this.adding()}> + </Button>
          <Button onPress={()=>this.subtract()}> - </Button>
          <Button onPress={()=>this.multiply()}> X </Button>
          <Button onPress={()=>this.divide()}> / </Button>
        </View>
      </View>
      
    );
  }
}

const mapStateToProps = ({ operation }) => {
    const { firstInput, secondInput, result } = operation;
    return { firstInput, secondInput, result }

}

const mapDispatchToProps = (dispatch) => {
  return {
    firstNumber: (num) => dispatch(operation.firstNumber(num)),
    secondNumber: (num) => dispatch(operation.secondNumber(num)),
    sum: (firstInput, secondInput) => dispatch(operation.sum(firstInput, secondInput)),
    diff: (firstInput, secondInput) => dispatch(operation.diff(firstInput, secondInput)),
    prod: (firstInput, secondInput) => dispatch(operation.prod(firstInput, secondInput)),
    quo: (firstInput, secondInput) => dispatch(operation.quo(firstInput, secondInput)),
    clear: (firstInput, secondInput) => dispatch(operation.clear(firstInput, secondInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen)
