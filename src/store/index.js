import { configureStore } from "@reduxjs/toolkit";
import frutsReducer from "./frutasSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//por padrão vai utilizar o local storage

const persitConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persitConfig, frutsReducer);

const store = configureStore({
  reducer: {
    frut: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persist = persistStore(store);

export { store, persist };
