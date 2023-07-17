export const operation = (value) => {
    return {
        type: 'CHANGE_OPERATION',
        payload: value
    }
};

export const operationClear = () => ({type: 'CLEAR_OPER'});
export const onEquals = () => ({type: 'ON_EQUALS'})
export const offEquals = () => ({type: 'OFF_EQUALS'})