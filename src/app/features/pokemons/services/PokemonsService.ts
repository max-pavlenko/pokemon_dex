import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ENV_VARS} from "@/utils/envVariables";
import {Pokemon, URLSummary} from "@/types/Pokemons";

export type PokemonsQuery = {
    count: number;
    next: null | string;
    previous: null | string;
    results: URLSummary[];
};

type TransformedPokemonsResponse = Omit<PokemonsQuery, 'results'> & { results: Pokemon[] };

export const pokemonsApi = createApi({
    reducerPath: 'pokemons',
    tagTypes: ['pokemons'],
    baseQuery: fetchBaseQuery({
        baseUrl: `https://${ENV_VARS.API_URL}`,
    }),
    endpoints: (builder) => ({
        getPokemons: builder.query<TransformedPokemonsResponse, { limit: number, offset?: number }>({
            query: ({limit, offset = 0}) => ({
                url: '/pokemon',
                params: {
                    limit,
                    offset,
                }
            }),
            providesTags: ['pokemons'],
            transformErrorResponse: (error) => {
                console.error('An error occurred while fetching pokemons:', error);
                return error;
            },
            async transformResponse(baseQueryReturnValue: PokemonsQuery): Promise<TransformedPokemonsResponse> {
                const results = await Promise.all(
                    baseQueryReturnValue.results.map(async (pokemon) => {
                        const response = await fetch(pokemon.url);
                        return await response.json();
                    })
                );
                return {
                    ...baseQueryReturnValue,
                    results,
                };
            }
        }),
    }),
});

