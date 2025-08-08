import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { carApi } from "../services/carApi";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [carApi.reducerPath]: carApi.reducer,
    authState: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, carApi.middleware),
});
