const initialState = {
    firstValue: '0',
    secondValue: '0',
    operation: {
        item: null
    },
    equals : false,
    theme : 'white'
}

const reducer = (state = initialState, action) => {
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
        case 'CHANGE_INTERMEDIATE_VALUE':
            return {
                ...state,
                intermediateValue: state.secondValue
            };
        case 'CHANGE_OPERATION':
            return {
                ...state,
                operation: {
                    item: action.payload
                }
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



        case 'ALL_CLEAR':
            return {
                ...state,
                firstValue: '0',
                secondValue: '0',
                operation: {
                    item: null
                },
                equals : false
            }
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
        case 'ON_EQUALS':
            return {
                ...state,
                equals: true
            };
        case 'OFF_EQUALS':
            return {
                ...state,
                equals: false
            };
        case 'CHANGE_THEME_BLACK':
            return {
                ...state,
                theme: 'black'
            }
        case 'CHANGE_THEME_WHITE':
            return {
                ...state,
                theme: 'white'
            }

        default:
            return state;
    }
}

export default reducer;