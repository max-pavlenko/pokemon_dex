import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pokemon, PokemonAbilityTypes} from "@/types/Pokemons";

interface PokemonFiltersState {
    pokemon: Pokemon | null;
    pokemonType: PokemonAbilityTypes | '';
}

const initialState: PokemonFiltersState = {
    pokemon: null,
    pokemonType: ''
}

export const pokemonFiltersSlice = createSlice({
    name: 'pokemonFilters',
    initialState,
    reducers: {
        SET_FILTERS: (state, action: PayloadAction<Partial<PokemonFiltersState>>) => {
            return {
                ...state,
                ...action.payload,
            }
        },
    },
})
