const initialState = {
    firstValue: '0',
    secondValue: '0'
}

const values = (state = initialState, action) => {
    switch(action.type) {
        case 'REWRITE_FIRST_VALUE':
            return {
                ...state,
                firstValue: action.payload
            }
        case 'CHANGE_FIRST_VALUE':
            return {
                ...state,
                firstValue: state.firstValue + action.payload
            };
        case 'REWRITE_SECOND_VALUE':
            return {
                ...state,
                secondValue: action.payload
        }
        case 'CHANGE_SECOND_VALUE':
            return {
                ...state,
                secondValue: state.secondValue + action.payload
            };
        case 'SUM_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) + Number(state.secondValue)),
            };
        case 'DIFF_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) - Number(state.secondValue)),
            };
        case 'PROD_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) * Number(state.secondValue))
            };
        case 'DIV_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) / Number(state.secondValue))
            };
        case 'SUM_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) + Number(state.secondValue)),
            };
        case 'DIFF_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) - Number(state.secondValue)),
            };
        case 'PROD_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) * Number(state.secondValue))
            };
        case 'DIV_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) / Number(state.secondValue))
            };
        case 'CLEAR_FIRST_VALUE':
            return {
                ...state,
                firstValue: '0'
            }
        case 'CLEAR_SECOND_VALUE':
            return {
                ...state,
                secondValue: '0'
            }
        case 'CLEAR_ALL_VALUES':
            return {
                ...state,
                firstValue: '0',
                secondValue: '0',
            }
        case 'CHANGE_ON_NEGATIVE_FIRST_VALUE':
            return {
                ...state,
                firstValue: String(-(state.firstValue))
            }
        case 'CHANGE_ON_POSITIVE_FIRST_VALUE':
            return {
                ...state,
                firstValue: String(Math.abs(state.firstValue))
            }
        case 'CHANGE_ON_NEGATIVE_SECOND_VALUE':
            return {
                ...state,
                secondValue: String(-(state.secondValue))
            }
        case 'CHANGE_ON_POSITIVE_SECOND_VALUE':
            return {
                ...state,
                secondValue: String(Math.abs(state.secondValue))
            }
        case 'PROCENT_FIRST_VALUES':
            return {
                ...state,
                firstValue: String(Number(state.firstValue) / 100)
            };
        case 'PROCENT_SECOND_VALUES':
            return {
                ...state,
                secondValue: String(Number(state.secondValue) / 100)
            };
        default:
            return state;
        }
}

export default values;