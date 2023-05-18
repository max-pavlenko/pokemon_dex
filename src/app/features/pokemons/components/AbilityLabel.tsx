import {FC} from 'react'
import {PokemonAbilityTypes} from "@/types/Pokemons";
import {ABILITY_COLORS, DEFAULT_COLOR} from "@/app/features/pokemons/constants/Colors";

type Props = {
    abilityName: PokemonAbilityTypes,
};

const AbilityLabel: FC<Props> = ({abilityName}) => {

    const backgroundColor = ABILITY_COLORS[abilityName].bg ?? DEFAULT_COLOR;
    const textColor = ABILITY_COLORS[abilityName].text ?? 'black';
    return (
        <div style={{backgroundImage: `linear-gradient(to bottom, white 5%, ${backgroundColor})`, color: textColor}} className='px-2 capitalize rounded-md text-[13px] py-0.5'>
            {abilityName}
        </div>
    );
};

export default AbilityLabel;
