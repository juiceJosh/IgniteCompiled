import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  firstNumber: ['num'],
  secondNumber: ['num'],
  sum: ['firstInput', 'secondInput'],
  diff: ['firstInput', 'secondInput'],
  prod: ['firstInput', 'secondInput'],
  quo: ['firstInput', 'secondInput'],
  clear: ['firstInput', 'secondInput']
})

export const CalculatorTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  firstInput: '',
  secondInput: '',
  result: 0
})

/* ------------- Reducers ------------- */
// number inputs
export const firstNumber = (state = INITIAL_STATE, { num }) => 
  state.merge({ firstInput: num })

export const secondNumber = (state = INITIAL_STATE, { num }) =>
  state.merge({ secondInput: num })

// operations
export const sum = (state = INITIAL_STATE, { firstInput, secondInput }) => 
  state.merge({ result: parseInt(firstInput) + parseInt(secondInput) })

export const diff = (state = INITIAL_STATE, { firstInput, secondInput }) => 
  state.merge({ result: parseInt(firstInput) - parseInt(secondInput) })

export const prod = (state = INITIAL_STATE, { firstInput, secondInput}) =>
  state.merge({ result: parseInt(firstInput) * parseInt(secondInput) })

export const quo = (state = INITIAL_STATE, { firstInput, secondInput }) =>
  state.merge({ result: parseInt(firstInput) / parseInt(secondInput) })
  
export const clear =(state = INITIAL_STATE, { firstInput, secondInput }) =>
  state.merge( { result: '' })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FIRST_NUMBER]: firstNumber,
  [Types.SECOND_NUMBER]: secondNumber,
  [Types.SUM]: sum,
  [Types.DIFF]: diff,
  [Types.PROD]: prod, 
  [Types.QUO]: quo,
  [Types.CLEAR]: clear
})
