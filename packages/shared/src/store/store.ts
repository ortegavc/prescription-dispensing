import { configureStore } from '@reduxjs/toolkit';
import {actionSlice} from '@store/slices/shared';

export const store = configureStore({
  reducer: {
    action:actionSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch