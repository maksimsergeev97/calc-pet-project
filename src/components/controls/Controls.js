import { useDispatch, useSelector } from 'react-redux';
import {
        rewriteFirstValue, 
        firstValue, 
        rewriteSecondValue, 
        secondValue, 
        operation, 
        sum, 
        diff,
        prod,
        div,
        allClear,
        firstClear,
        secondClear,
        firstNegative, 
        firstPositive, 
        secondNegative, 
        secondPositive,
        firstProcent,
        secondProcent,
        onEquals,
        offEquals
    } from '../../actions';

import './controls.scss';

const Controls = () => {
    const dispatch = useDispatch();
    const first = useSelector(store => store.firstValue);
    const second = useSelector(store => store.secondValue)
    const operationElem = useSelector(store => store.operation);
    const equals = useSelector(store => store.equals);
    const theme = useSelector(store => store.theme);

    const numberElements = ['7','8','9','4','5','6','1','2','3', '0', '.']
    const operationElements = ['+', '-', 'x', '/']
    const changeStateElements = ['AC','+/-', '%', '=']
    
    const regex = /^([^.]*)\.(?!.*\.)[^.]*$/;

    const perfomOperation = () => {
        if (second !== '0') {
            switch(operationElem.item) {
                case '+':
                    dispatch(sum());
                    break;
                case '-':
                    dispatch(diff());
                    break;
                case 'x':
                    dispatch(prod());
                    break;    
                case '/':
                    dispatch(div());
                    break;  
                default:
                    return operationElem.item
            }
        }
    }

    const changeStateValues = (value) => {
        switch (value) {
            case 'AC':
                dispatch(allClear())
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
                // if (first !== '0' && second !== '0' && !equals) {
                //     dispatch(onEquals())
                // }
                if (!equals) {
                    dispatch(onEquals())
                }
                perfomOperation()
                break;
            default:
                return value
        }
    }

    const procentValue = () => {
        if(second !== '0' && !equals){
            dispatch(secondProcent())
        } else {
            dispatch(firstProcent())
        }
    }

    //clear values
    const clearValues = () => {
        if(second !== '0' && !equals){
            dispatch(secondClear())
        } else {
            dispatch(firstClear())
        }
    }

    //change values on positive or negative
    const posOrNeg = () => {
        if((second === '0' || equals) && first >= 0) {
            dispatch(firstNegative())
        } else if ((second === '0' || equals) && first < 0) {
            dispatch(firstPositive())
        } else if (second >= 0) {
            dispatch(secondNegative()) 
        } else {
            dispatch(secondPositive())
        }
    }

    const changeValues = (value) => {
        if (first !== '0' && operationElem.item !== null && second !=='0' && second.length <= 8) {
            if (value === '.' && regex.test(second)) {
                return
            } else {
                dispatch(secondValue(value)) 
            }

        } else if ((first === '0' && operationElem.item === null)|| equals) {
            dispatch(rewriteFirstValue(value))
        } else if ((first !== '0' && operationElem.item !== null && second === '0') || (first === '0' && operationElem.item !== null)) {
            dispatch(rewriteSecondValue(value))
        } else if (value === '.' && regex.test(first)) {
            return
        } else {
            if(first.length <= 8) {
                dispatch(firstValue(value))
            }
        }
    }

    const changeOperation = (value) => {
        if (!equals) {
            perfomOperation()
        } else {
            dispatch(offEquals())
        }
        // if (first !== '0') {
        //     dispatch(operation(value))
        //     dispatch(secondClear())
        // } else {
        //     return
        // }
        dispatch(operation(value))
        dispatch(secondClear())
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