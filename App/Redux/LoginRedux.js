import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  emailIn: ['text'],
  passIn: ['text'],
  logIn: ['email', 'password', 'navigation']
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: '',
  password: '',
  navigation: ''
})

/* ------------- Reducers ------------- */
// login reducers
export const emailIn = (state = INITIAL_STATE, { text }) => 
  state.merge({ email: text })

export const passIn = (state = INITIAL_STATE, { text }) =>
  state.merge({ password: text })

export const logIn = ( state = INITIAL_STATE, { email, password, navigation }) => {
  if(email==='user123@gmail.com' && password==='qwertyuiop') {
    navigation.navigate('PostLoginScreen')
  }
  return state.merge()
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMAIL_IN]: emailIn,
  [Types.PASS_IN]: passIn,
  [Types.LOG_IN]: logIn
})