export type URLSummary = {
    name: string;
    url: string;
};

type Version = URLSummary;

export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string,
        url: string,
    }
}

type GameIndex = {
    game_index: number;
    version: Version;
};

type Move = URLSummary;

type VersionGroupDetails = {
    move: Move;
    version_group_details: any[];
};

type Sprite = {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
        dream_world: any;
        home: any;
        "official-artwork": any;
    };
    versions: any;
};

type Type = {
    slot: number;
    type: { name: PokemonAbilityTypes, url: string };
};

export type Pokemon = {
    abilities: {
        ability: { name: string, url: string };
        is_hidden: boolean;
        slot: number;
    }[];
    base_experience: number;
    forms: URLSummary[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
        move: Move;
        version_group_details: VersionGroupDetails[];
    }[];
    name: string;
    order: number;
    past_types: any[];
    species: URLSummary;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
};


export type PokemonAbilityTypes = | "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow";
