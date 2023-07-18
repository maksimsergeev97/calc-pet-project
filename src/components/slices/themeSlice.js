import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    theme : 'white'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeWhite: state => {state.theme = 'white'},
        themeBlack: state => {state.theme = 'black'}
    }
})

const {actions, reducer} = themeSlice;

export default reducer;

export const {
    themeWhite,
    themeBlack
} = actions;