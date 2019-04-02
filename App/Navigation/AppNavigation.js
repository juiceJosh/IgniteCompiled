import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import CalculatorScreen from '../Containers/CalculatorScreen'
import LoginScreen from '../Containers/LoginScreen'
import WelcomeScreen from '../Containers/WelcomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import PostLoginScreen from '../Containers/PostLoginScreen';

const LoginStack = createStackNavigator({
  LoginScreen: {screen: LoginScreen },
  PostLoginScreen: {screen: PostLoginScreen }
}, {
  headerMode: 'none'
})

// Manifest of possible screens
const PrimaryNav = createDrawerNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: LoginStack },
  Calculator: { screen: CalculatorScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Welcome',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
