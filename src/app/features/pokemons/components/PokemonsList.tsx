import {FC} from 'react'
import PokemonCard, {PokemonCardClickHandler} from "@/app/features/pokemons/components/PokemonCard";
import {Pokemon} from "@/types/Pokemons";
import {useAppSelector} from "@/store/store";

type Props = {
    pokemons: Pokemon[],
    onPokemonCardClick: PokemonCardClickHandler,
};

const PokemonsList: FC<Props> = ({pokemons, onPokemonCardClick},) => {
    const {pokemon: selectedPokemon, pokemonType: type} = useAppSelector(state => state.pokemonFilters)

    const filteredByTypePokemons = !type ? pokemons : pokemons.filter(({types}) => types.some(({type: {name}}) => name === type));

    return (
        <ul className='flex justify-center flex-wrap gap-3'>
            {filteredByTypePokemons.map(pokemon =>
                <li style={{outline: `2px solid ${pokemon.name === selectedPokemon?.name ? 'orange' : 'transparent'}`}}
                    className='w-full rounded-md md:w-auto' key={pokemon.name}>
                    <PokemonCard onClick={onPokemonCardClick} pokemon={pokemon}/>
                </li>)
            }
        </ul>
    );
};

export default PokemonsList;
