const initialState = {
    theme : 'white'
}

const theme = (state = initialState, action) => {
    switch(action.type) {
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

export default theme;