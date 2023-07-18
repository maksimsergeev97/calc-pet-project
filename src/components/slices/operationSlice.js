import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    operation: {
        item: null
    },
    equals : false
}

const operationSlice = createSlice ({
    name: 'operation',
    initialState,
    reducers: {
        operationChange: (state, action) => {state.operation.item = action.payload},
        operationClear: state => {state.operation.item = null; state.equals = false},
        operationEqualOn: state => {state.equals = true},
        operationEqualOff: state => {state.equals = false},
    }
})

const {actions, reducer} = operationSlice;

export default reducer;
export const {
    operationChange,
    operationClear,
    operationEqualOn,
    operationEqualOff
} = actions;

