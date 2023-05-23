import {FC} from 'react'
import {PokemonAbilityTypes} from "@/types/Pokemons";
import {ABILITY_COLORS, DEFAULT_COLOR, DEFAULT_TEXT_COLOR} from "@/app/features/pokemons/constants/Colors";

type Props = {
    abilityName: PokemonAbilityTypes,
};

const AbilityLabel: FC<Props> = ({abilityName}) => {

    const {text, bg} = ABILITY_COLORS[abilityName];
    const textColor = text ?? DEFAULT_TEXT_COLOR;

    return (
        <div style={{backgroundImage: `linear-gradient(to bottom, white 5%, ${bg})`, color: textColor}} className='px-2 capitalize rounded-md text-[13px] py-0.5'>
            {abilityName}
        </div>
    );
};

export default AbilityLabel;
