export const rewriteFirstValue = (value) => {
    return {
        type: 'REWRITE_FIRST_VALUE',
        payload: value
    }
};

export const firstValue = (value) => {
    return {
        type: 'CHANGE_FIRST_VALUE',
        payload: value
    }
};

export const rewriteSecondValue = (value) => {
    return {
        type: 'REWRITE_SECOND_VALUE',
        payload: value
    }
};

export const secondValue = (value) => {
    return {
        type: 'CHANGE_SECOND_VALUE',
        payload: value
    }
};

export const intermediateValue = () => ({type: 'CHANGE_INTERMEDIATE_VALUE'})

export const operation = (value) => {
    return {
        type: 'CHANGE_OPERATION',
        payload: value
    }
};


export const sum = () => ({type: 'SUM_VALUES'});
export const diff = () => ({type: 'DIFF_VALUES'});
export const prod = () => ({type: 'PROD_VALUES'});
export const div = () => ({type: 'DIV_VALUES'});
export const allClear = () => ({type: 'ALL_CLEAR'});
export const firstClear = () => ({type: 'CLEAR_FIRST_VALUE'});
export const secondClear = () => ({type: 'CLEAR_SECOND_VALUE'});
export const firstNegative = () => ({type: 'CHANGE_ON_NEGATIVE_FIRST_VALUE'})
export const firstPositive = () => ({type: 'CHANGE_ON_POSITIVE_FIRST_VALUE'})
export const secondNegative = () => ({type: 'CHANGE_ON_NEGATIVE_SECOND_VALUE'})
export const secondPositive = () => ({type: 'CHANGE_ON_POSITIVE_SECOND_VALUE'})
export const firstProcent = () => ({type: 'PROCENT_FIRST_VALUES'})
export const secondProcent = () => ({type: 'PROCENT_SECOND_VALUES'})
export const onEquals = () => ({type: 'ON_EQUALS'})
export const offEquals = () => ({type: 'OFF_EQUALS'})
export const themeBlack = () => ({type: 'CHANGE_THEME_BLACK'})
export const themeWhite = () => ({type: 'CHANGE_THEME_WHITE'})