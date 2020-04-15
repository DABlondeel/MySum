import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../reducer';
import { addNumber, addToSelected, removeFromSelected, deleteNumbers } from './MySumStore/Actions'
import './MySum.scss'

export interface ISelectedNumber {
  number: number,
  index: number
}
interface IProps {
  numbers: number[],
  loading: boolean,
  selectedNumbers: ISelectedNumber[],
  addNumber: (number: number) => void,
  deleteNumbers: () => void,
  addToSelected: (selectedNumber: number, index: number) => void,
  removeFromSelected: (selectedNumber: number, index: number) => void

}

const MySum: React.FunctionComponent<IProps> = (props: IProps) => {
  const [value, setValue] = useState<string>('')
  
  useEffect(() => {
  }, [props])
  
  const reg = new RegExp('^[0-9]+$');
  const handleOnClick = () => {
    if (reg.test(value)) {
      props.addNumber(parseInt(value))
    } else {
      alert('Please enter a number')
    }
  }

  const handleDeleteClick = () => {
      let confirm = window.confirm('wilt u de selectie verwijderen?')
      if (confirm === true) {
        props.deleteNumbers()
      }
      
  }

  const sum = props.numbers.reduce((x: number, y: number) => x + y,0)

  return (
    <div className='MySum'>
      <h1>MySum</h1>
      <input onChange={e => setValue(e.target.value)}></input>
      <button className={'button'} onClick={handleOnClick} >
          voeg toe
      </button>
      <div className='numbers'>
        {props.numbers.map((number: number, index: number) => {
          const handleNumberOnClick = () => {
            const find = props.selectedNumbers.find((object: ISelectedNumber) => {
              return object.number === number && object.index === index
            })
            if(!find) {
              props.addToSelected(number,index)
            } else{
              props.removeFromSelected(number, index)
            }
          }
          const find = props.selectedNumbers.find((object: ISelectedNumber) => {
            return object.number === number && object.index === index
          })
          const div = <div onClick={handleNumberOnClick} className={find ?'singleNumber selected': 'singleNumber'} key={index}>
              [{number}]
            </div>
          return div
        })}
      </div>
      <div className='total'>
        Totaal: 
        <div> {sum}</div>
      </div>
      <button className={'button delete'} onClick={handleDeleteClick}>
        verwijder selectie
      </button>
    </div>
  )
}
const mapStateToProps = (state: IAppState) => {
  return {
      numbers: state.sumReducer.numbers,
      loading: state.sumReducer.loading,
      selectedNumbers: state.sumReducer.selectedNumbers
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
     addNumber: (number: number) => dispatch(addNumber(number)),
     deleteNumbers: () => dispatch(deleteNumbers()),
     addToSelected: (selectedNumber: number, index: number) => dispatch(addToSelected(selectedNumber, index)),
     removeFromSelected: (selectedNumber: number, index: number) => dispatch(removeFromSelected(selectedNumber, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MySum)