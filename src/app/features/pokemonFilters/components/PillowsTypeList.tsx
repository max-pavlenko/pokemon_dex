import { ComponentProps, FC } from 'react';
import SelectPillow from '@/app/shared/ui/SelectPillow';
import { PokemonAbilityTypes } from '@/types/Pokemons';
import { useActions, useAppSelector } from '@/store/store';
import {SORT_TYPES} from "@/app/features/pokemonFilters/constants/SortTypes";

type Props = {
    sortTypes?: PokemonAbilityTypes[];
} & ComponentProps<typeof SelectPillow>;

const PillowsTypeList: FC<Props> = ({ sortTypes = SORT_TYPES, ...props }) => {
    const { SET_FILTERS } = useActions();
    const { pokemonType } = useAppSelector((state) => state.pokemonFilters);

    function handlePokemonTypeClick(type: PokemonAbilityTypes) {
        const newPokemonType = type === pokemonType ? '' : type;
        SET_FILTERS({ pokemonType: newPokemonType });
    }

    return (
        <ul className="flex justify-center flex-wrap gap-2">
            {sortTypes.map((type) => (
                <li key={type}>
                    <SelectPillow
                        className={type === pokemonType ? 'bg-pink-200' : ''}
                        onClick={() => handlePokemonTypeClick(type)}
                        {...props}
                    >
                        {type}
                    </SelectPillow>
                </li>
            ))}
        </ul>
    );
};

export default PillowsTypeList;
