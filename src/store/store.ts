import { configureStore } from '@reduxjs/toolkit'
import coordinatesReducer from './slices/coordinatesSlice'

export const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch