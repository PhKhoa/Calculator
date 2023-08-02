import { createReducer, on } from '@ngrx/store';
import * as calculatorActions from '../actions/calculator.actions'
import { Calculator } from 'src/app/model/calc';
export const initialState:Calculator = {
    firstNumber: 0,
    secondNumber: 0,
    operation : '',
    result:0
};

export const calculatorReducer = createReducer(
    initialState,
    // on(calculatorActions.pressKeyWord, (state) => state.firstNumber = ),
    // on(calculatorActions.pressOperation, (state) => state.operation = 1),
    on(calculatorActions.reset, (state) =>{return{
        firstNumber: 0,
        secondNumber: 0,
        operation : '',
        result:0
    }} )
  );