import {PokemonAbilityTypes} from "@/types/Pokemons";

export const DEFAULT_COLOR = 'mistyrose';
export const DEFAULT_TEXT_COLOR = 'black';

export const ABILITY_COLORS: Record<PokemonAbilityTypes, { bg: string, text?: string }> = {
    fire: { bg: 'red', text: '#333' },
    poison: { bg: 'violet' },
    grass: { bg: 'lime' },
    bug: { bg: 'red', text: '#333' },
    dark: { bg: '#888' },
    dragon: { bg: 'orange' },
    electric: { bg: 'steelblue' },
    fairy: { bg: 'forestgreen' },
    fighting: { bg: 'orange' },
    flying: { bg: 'cyan' },
    ice: { bg: 'cyan' },
    ghost: { bg: '#aaa' },
    ground: { bg: 'brown' },
    normal: { bg: DEFAULT_COLOR },
    psychic: { bg: 'hotpink' },
    rock: { bg: '#999' },
    shadow: { bg: '#666' },
    steel: { bg: 'steelblue' },
    unknown: { bg: DEFAULT_COLOR },
    water: { bg: 'blue', text: '#fff' },
};
