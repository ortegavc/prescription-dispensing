import {configureStore} from '@reduxjs/toolkit';
import { despachoActions } from '@presentation/actions';

export const store =configureStore({
    reducer:{
        despacho: despachoActions.reducer
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
