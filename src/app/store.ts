import { configureStore } from '@reduxjs/toolkit'; // handles thunk TODO: investigate thunk
import { dogsApiSlice } from '../features/dogs/api-slice';
import dogReducer from '../features/dogs/dog-slice';

export const store = configureStore({
  reducer: {
    dog: dogReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  },
});

// TODO: learn the magic behind this
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
