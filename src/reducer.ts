import {combineReducers, Reducer} from 'redux'
import {reducer as SumReducer, ISum} from './App/MySumStore/Reducer'

export interface IAppState {
    sumReducer: ISum,
}
const reducer: Reducer = combineReducers({
    sumReducer: SumReducer
})

export default reducer
