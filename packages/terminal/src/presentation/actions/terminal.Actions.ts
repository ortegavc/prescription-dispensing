import { initialState } from "@domain/models/terminal.model";
import { createSlice } from "@reduxjs/toolkit";

export const terminalActions = createSlice({
    name: "Terminal",
    initialState,
    reducers: {
        addTerminal: (state, action) => {
            console.log('terminal----',action.payload )
            return { ...state, ...action.payload };
        },
    },
});

export const { addTerminal } = terminalActions.actions;
