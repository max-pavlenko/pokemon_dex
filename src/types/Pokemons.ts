export type URLSummary = {
    name: string;
    url: string;
};

export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string,
        url: string,
    }
}

type Move = URLSummary;

type Sprite = {
    back_default: string;
    front_default: string;
};

type Type = {
    slot: number;
    type: { name: PokemonAbilityTypes, url: string };
};

export type Pokemon = {
    abilities: {
        ability: { name: string, url: string };
    }[];
    base_experience: number;
    moves: {
        move: Move;
    }[];
    name: string;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
};


export type PokemonAbilityTypes = | "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow";
