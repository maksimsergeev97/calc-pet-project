import { useSelector } from "react-redux";
import './outputLine.scss';

const OutputLine = () => {

    const firstValue = useSelector(state => state.firstValue);
    const secondValue = useSelector(state => state.secondValue);
    const equals = useSelector(state => state.equals);
    const operationElem = useSelector(state => state.operation.item)
    const theme = useSelector(state => state.theme);
    let outputClass = theme === 'black' ? 'calc_output calc_output-black' : 'calc_output'

    if ((secondValue === '0' && operationElem === null) || equals) {
        if (firstValue.length <= 10) {
            return (
                <h1 className={outputClass}>{firstValue}</h1>
            )
        } else {
            return (
                <h1 className={outputClass}>{firstValue.slice(0, 10)}</h1>
            )
        }
        
    } else {
        return (
            <h1 className={outputClass}>{secondValue}</h1>
        )
    }
}

export default OutputLine;