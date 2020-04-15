import { Reducer } from 'redux'
import { LOADING, ADD_NUMBER, DELETE_NUMBERS, ADD_TO_SELECTED, REMOVE_FROM_SELECTED } from './Actions'
import { ISelectedNumber } from '../MySum'

export interface ISum {
    loading: boolean,
    numbers: number[],
    selectedNumbers: ISelectedNumber[]
}
const initialState: ISum ={
    loading: false,
    numbers:[],
    selectedNumbers:[]
}

export const reducer: Reducer<ISum> = (state: ISum = initialState, action: any): ISum => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_NUMBER:
            return {
                ...state,
                loading: false,
                numbers: state.numbers.concat(action.number)
            }
        case DELETE_NUMBERS:
            const indexValues = state.selectedNumbers.map((element) => {
                return element.index
            })
            for (var i = indexValues.length -1; i >= 0; i--) {
                state.numbers.splice(indexValues[i],1);
            }
            return {
                ...state,
                loading: false,
                numbers: state.numbers,
                selectedNumbers: []
            }
        case ADD_TO_SELECTED:
            return {
                ...state,
                selectedNumbers: state.selectedNumbers.concat({number:action.selectedNumber, index:action.index})
            }
        case REMOVE_FROM_SELECTED:
            return {
                ...state,
                selectedNumbers: state.selectedNumbers.filter(item => item.index !== action.index)
            }
        default:
            return state
    }
}

export default reducer
