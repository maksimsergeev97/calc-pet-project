import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstValue: '0',
    secondValue: '0'
}

const valuesSlice = createSlice ({
    name: 'values',
    initialState,
    reducers: {
        valuesRewriteFirst: (state, action) => {
            state.firstValue = action.payload;
        },
        valuesAddFirst: (state, action) => {
            state.firstValue = state.firstValue + action.payload;
        },
        valuesRewriteSecond: (state, action) => {
            state.secondValue = action.payload;
        },
        valuesAddSecond: (state, action) => {
            state.secondValue = state.secondValue + action.payload;
        },
        valuesSum: state => {state.firstValue = String(Number(state.firstValue) + Number(state.secondValue))},
        valuesDiff: state => {state.firstValue = String(Number(state.firstValue) - Number(state.secondValue))},
        valuesProd: state => {state.firstValue = String(Number(state.firstValue) * Number(state.secondValue))},
        valuesDiv: state => {state.firstValue = String(Number(state.firstValue) / Number(state.secondValue))},
        valuesClearFirst: state => {state.firstValue = '0'},
        valuesClearSecond: state => {state.secondValue = '0'},
        valuesClearAll: state => {
            state.firstValue = '0'; 
            state.secondValue = '0'
        },
        valuesNegativeFirst: state => {state.firstValue = String(-(state.firstValue))},
        valuesNegativeSecond: state => {state.secondValue = String(-(state.secondValue))},
        valuesPositiveFirst: state => {state.firstValue = String(Math.abs(state.firstValue))},
        valuesPositiveSecond: state => {state.secondValue = String(Math.abs(state.secondValue))},
        valuesProcentFirst: state => {state.firstValue = String(Number(state.firstValue) / 100)},
        valuesProcentSecond: state => {state.secondValue = String(Number(state.secondValue) / 100)}
    }
});

const {actions, reducer} = valuesSlice;

export default reducer;
export const {
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
    valuesProcentSecond,

} = actions;