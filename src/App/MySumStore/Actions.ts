import { Dispatch } from 'redux'

export const LOADING = "LOADING"
export const ADD_NUMBER = "ADD_NUMBER"
export const DELETE_NUMBERS = "DELETE_NUMBERS"
export const ADD_TO_SELECTED = "ADD_TO_SELECTED"
export const REMOVE_FROM_SELECTED = "REMOVE_FROM_SELECTED"

export function addNumber(number :number) {
    return (dispatch: Dispatch<any>) => {
        dispatch(loading())

        dispatch(addNumberSuccess(number))
    }
}

export function deleteNumbers() {
    return (dispatch: Dispatch<any>) => {
        dispatch(loading())

        dispatch(deleteNumbersSuccess())
    }
}

export function addToSelected (selectedNumber: number, index: number) {
    return (dispatch: Dispatch<any>) => {
        dispatch(addToSelectedSuccess(selectedNumber, index))
    }
}

export function removeFromSelected (selectedNumber: number, index: number) {
    return (dispatch: Dispatch<any>) => {
        dispatch(removeFromSelectedSuccess(selectedNumber, index))
    }
}

function loading() {
    return {
        type: LOADING
    }
}
function addNumberSuccess(number: number) {
    return {
        type: ADD_NUMBER,
        number
    }
}

function deleteNumbersSuccess() {
    return {
        type: DELETE_NUMBERS,
    }
}

function addToSelectedSuccess(selectedNumber: number, index: number) {
    return {
        type: ADD_TO_SELECTED,
        selectedNumber,
        index
    }
}

function removeFromSelectedSuccess(selectedNumber: number, index: number) {
    return {
        type: REMOVE_FROM_SELECTED,
        selectedNumber,
        index
    }
}