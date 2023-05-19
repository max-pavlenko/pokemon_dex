import {FC} from 'react'
import Image from "next/image";
import {Pokemon} from "@/types/Pokemons";
import AbilityLabel from "@/app/features/pokemons/components/AbilityLabel";
import Outlined from "@/app/shared/ui/Outlined";

export type PokemonCardClickHandler = (pokemon: Pokemon) => void;

type Props = {
    pokemon: Pokemon;
    onClick: PokemonCardClickHandler,
};

const PokemonCard: FC<Props> = ({pokemon, onClick}) => {
    const {sprites: {front_default}, name, types} = pokemon;

    return (
        <button className='flex h-full w-[inherit] md:w-auto md:max-w-[180px]' onClick={() => onClick(pokemon)}>
            <Outlined element='figure' className='flex w-[inherit] md:w-auto h-full p-1 pb-1.5 flex-col'>
                <Image priority={true} draggable={false} className='rounded-md mx-auto object-cover' src={front_default} alt={name} width={200} height={200}/>
                <div>
                    <figcaption className='text-center capitalize text-lg font-[600]'>
                        {name}
                    </figcaption>
                    <ul className='flex justify-center gap-1.5 flex-wrap mt-1'>
                        {types.map(({type: {name}}) =>
                            <li key={name}>
                                <AbilityLabel abilityName={name}/>
                            </li>
                        )}
                    </ul>
                </div>
            </Outlined>
        </button>
    );
};

export default PokemonCard;
