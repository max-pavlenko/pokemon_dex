import {ComponentProps, FC, useEffect, useState} from 'react'
import Image from "next/image";
import {Pokemon, Stat} from "@/types/Pokemons";
import Outlined from "@/app/shared/ui/Outlined";
import styles from '../../../../styles/PokemonFullStatsCard.module.scss';

type Props = {
    pokemon: Pokemon | null,
} & ComponentProps<'figure'>;

type UsedStat = Omit<Stat, 'effort' | 'stat'> & { stat: { name: string } };

const PokemonDetailsCard: FC<Props> = ({pokemon, className, ...props}) => {
    const [displayedPokemon, setDisplayedPokemon] = useState<Pokemon | null>(null);

    useEffect(() => { // to make smooth transition for poks on disappearing
        if (pokemon) setDisplayedPokemon(pokemon);
    }, [pokemon]);

    if (!displayedPokemon) return null;

    const {name, sprites: {front_default: image}, stats, weight, moves} = displayedPokemon;
    const usedStats: UsedStat[] = [...stats,
        {base_stat: weight, stat: {name: 'weight'}},
        {base_stat: moves.length, stat: {name: 'total moves'}},
    ];

    return (
        <Outlined element='figure' className={`flex flex-col  gap-2 ${className}`} {...props}>
            <div className='relative h-[330px] object-cover'>
                <Image className='rounded-md' src={image} alt={name} fill/>
            </div>
            <figcaption className='text-lg text-center capitalize font-bold'>{name}</figcaption>

            <table className={styles.table}>
                <thead>
                <tr className={styles.row}>
                    <th>Type</th>
                    <th>Fire</th>
                </tr>
                </thead>
                <tbody>
                {usedStats.map(({base_stat, stat: {name}}) => {
                    return (
                        <tr className={styles.row} key={name}>
                            <td>{name.replace(/-/, ' ')}</td>
                            <td>{base_stat}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </Outlined>
    );
};

export default PokemonDetailsCard;
