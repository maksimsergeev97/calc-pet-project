import { useDispatch, useSelector } from 'react-redux';
import {
    valuesRewriteFirst,
    valuesAddFirst,
    valuesRewriteSecond,
    valuesAddSecond,
    valuesSum,
    valuesDiff,
    valuesProd,
    valuesDiv,
    valuesClearFirst,
    valuesClearSecond,
    valuesClearAll,
    valuesNegativeFirst,
    valuesNegativeSecond,
    valuesPositiveFirst,
    valuesPositiveSecond,
    valuesProcentFirst,
    valuesProcentSecond
} from '../slices/valuesSlice';

import { 
        operationChange,
        operationClear,
        operationEqualOn,
        operationEqualOff,
} from '../slices/operationSlice';

import './controls.scss';

const Controls = () => {
    const dispatch = useDispatch();
    const first = useSelector(state => state.values.firstValue);
    const second = useSelector(state => state.values.secondValue)
    const operationElem = useSelector(state => state.operations.operation);
    const equals = useSelector(state => state.operations.equals);
    const theme = useSelector(state => state.theme.theme);

    const numberElements = ['7','8','9','4','5','6','1','2','3', '0', '.']
    const operationElements = ['+', '-', 'x', '/']
    const changeStateElements = ['AC','+/-', '%', '=']
    
    const regex = /^([^.]*)\.(?!.*\.)[^.]*$/;

    const perfomOperation = () => {
        if (second !== '0') {
            switch(operationElem.item) {
                case '+':
                    dispatch(valuesSum());
                    break;
                case '-':
                    dispatch(valuesDiff());
                    break;
                case 'x':
                    dispatch(valuesProd());
                    break;    
                case '/':
                    dispatch(valuesDiv());
                    break;  
                default:
                    return operationElem.item
            }
        }
    }

    const changeStateValues = (value) => {
        switch (value) {
            case 'AC':
                dispatch(valuesClearAll())
                dispatch(operationClear())
                break;
            case 'C':
                clearValues()
                break;
            case '+/-':
                posOrNeg()
                break;
            case '%':
                procentValue()
                break;
            case '=':
                if (!equals) {
                    dispatch(operationEqualOn())
                }
                perfomOperation()
                break;
            default:
                return value
        }
    }

    const procentValue = () => {
        if(second !== '0' && !equals){
            dispatch(valuesProcentSecond())
        } else {
            dispatch(valuesProcentFirst())
        }
    }

    //clear values
    const clearValues = () => {
        if(second !== '0' && !equals){
            dispatch(valuesClearSecond())
        } else {
            dispatch(valuesClearFirst())
        }
    }

    //change values on positive or negative
    const posOrNeg = () => {
        if((second === '0' || equals) && first >= 0) {
            dispatch(valuesNegativeFirst())
        } else if ((second === '0' || equals) && first < 0) {
            dispatch(valuesPositiveFirst())
        } else if (second >= 0) {
            dispatch(valuesNegativeSecond()) 
        } else {
            dispatch(valuesPositiveSecond())
        }
    }

    const changeValues = (value) => {
        if (first !== '0' && operationElem.item !== null && second !=='0' && second.length <= 8) {
            if (value === '.' && regex.test(second)) {
                return
            } else {
                dispatch(valuesAddSecond(value)) 
            }

        } else if ((first === '0' && operationElem.item === null)|| equals) {
            dispatch(valuesRewriteFirst(value))
        } else if ((first !== '0' && operationElem.item !== null && second === '0') || (first === '0' && operationElem.item !== null)) {
            dispatch(valuesRewriteSecond(value))
        } else if (value === '.' && regex.test(first)) {
            return
        } else {
            if(first.length <= 8) {
                dispatch(valuesAddFirst(value))
            }
        }
    }

    const changeOperation = (value) => {
        if (!equals) {
            perfomOperation()
        } else {
            dispatch(operationEqualOff())
        }
        dispatch(operationChange(value))
        dispatch(valuesClearSecond())
    }


    let contentNumClass = theme === 'black' ? 'calc calc_number_controls calc_number_controls-black' : 'calc calc_number_controls';
    let operationClass = theme === 'black' ? 'calc calc_operation_controls calc_operation_controls-black' : 'calc calc_operation_controls';
    let contentStateClass = theme === 'black' ? 'calc calc_state_controls calc_state_controls-black' : 'calc calc_state_controls';
    let equalClass = theme === 'black' ? 'equal equal-black' : 'equal';
    
    const contentNum = numberElements.map(item => {
       if (item === '0') {
            return <button className= {contentNumClass + ' zero'}onClick={() => changeValues(item)}>{item}</button>
       } else {
            return <button className={contentNumClass} onClick={() => changeValues(item)}>{item}</button>
       }
    })

    let operationClassActive;
    const contentOper = operationElements.map(item => {
        if (item === operationElem.item){ 
            operationClassActive = operationClass + ' calc_operation_controls_active'
        } else {
            operationClassActive = operationClass
        }
        return (
            <button className={operationClassActive} onClick={() => changeOperation(item)}>{item}</button>
        )
    })

    const contentChangeState = changeStateElements.map(item => {
        if(first !== '0' && item === 'AC'){
            item = 'C'
        } 
        if (item === '=') {
            return (
                <button className={contentStateClass + ' ' + equalClass} onClick={() => changeStateValues(item)}>{item}</button>
            )
        } else {
            return (
                <button className={contentStateClass} onClick={() => changeStateValues(item)}>{item}</button>
            )
        }
        
    })

    return (
        <div className="controls-wrapper">
            <div className="number-wrapper">
                {contentNum}
            </div>
            <div className="operation-wrapper">
                {contentOper}
            </div>
            <div className="content-state-wrapper">
                {contentChangeState}
            </div>
        </div>
    )
}


export default Controls;