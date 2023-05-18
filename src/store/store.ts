import {bindActionCreators, combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {pokemonsApi} from "@/app/features/pokemons/services/PokemonsService";
import {pokemonFiltersSlice} from "@/app/features/pokemonFilters/reducers/PockemonFiltersSlice";

const rootReducer = combineReducers({
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    pokemonFilters: pokemonFiltersSlice.reducer,
});

const middlewares = [
    thunk,
    pokemonsApi.middleware,
];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares],
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const AllActions = {
    ...pokemonFiltersSlice.actions
}

export const useActions = () => {
    return bindActionCreators(AllActions, useAppDispatch());
}
