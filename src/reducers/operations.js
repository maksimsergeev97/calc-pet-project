const initialState = {
    operation: {
        item: null
    },
    equals : false
}

const operations = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_OPERATION':
            return {
                ...state,
                operation: {
                    item: action.payload
                }
            };
        case 'CLEAR_OPER':
            return {
                ...state,
                operation: {
                    item: null
                },
                equals : false
            }
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
        default:
            return state;
    }
}

export default operations;