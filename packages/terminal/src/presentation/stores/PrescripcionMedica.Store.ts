import {configureStore} from '@reduxjs/toolkit';
import { prescripcionMedicaActions } from '@presentation/actions';

export const store =configureStore({
    reducer:{
        prescripcionMedica: prescripcionMedicaActions.reducer
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
