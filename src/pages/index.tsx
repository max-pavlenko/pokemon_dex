import {useState} from 'react';
import {Pokemon} from "@/types/Pokemons";
import PokemonDetailsCard from "@/app/features/pokemons/components/PokemonDetailsCard";
import {pokemonsApi} from "@/app/features/pokemons/services/PokemonsService";
import Loader from "@/app/shared/ui/Loader";
import {SM_MEDIAQUERY} from "@/app/features/pokemons/constants/MediaQueries";
import PillowsTypeList from "@/app/features/pokemonFilters/components/PillowsTypeList";
import PokemonsList from "@/app/features/pokemons/components/PokemonsList";
import {useActions, useAppSelector} from "@/store/store";
import LargeButton from "@/app/shared/ui/LargeButton";

const INCREASE_LIMIT_BY = 10;


const HomePage = () => {
  const [limit, setLimit] = useState(INCREASE_LIMIT_BY);

  const {SET_FILTERS} = useActions();
  const {pokemon: selectedPokemon,} = useAppSelector(state => state.pokemonFilters)
  const {data, isLoading, error, isFetching} = pokemonsApi.useGetPokemonsQuery({limit})

  function handleLoadMoreClick() {
    setLimit(prevState => prevState + INCREASE_LIMIT_BY)
  }

  function handlePokemonCardClick(pokemon: Pokemon) {
    const CLIENT_WIDTH = document.body.clientWidth;
    const isClickedSamePokemon = selectedPokemon?.name === pokemon.name;
    const newSelectedPokemon = isClickedSamePokemon ? null : pokemon;

    if (CLIENT_WIDTH <= SM_MEDIAQUERY && !isClickedSamePokemon)
      window.scroll({top: 0, behavior: 'smooth'});

    SET_FILTERS({pokemon: newSelectedPokemon});
  }

  if (error) return <b>Error... {JSON.stringify(error, null, 3)}</b>;
  if (isLoading || !data) return <Loader/>;

  return (
      <div className='flex flex-col gap-8'>
        <PillowsTypeList />

        <div className='flex flex-col-reverse sm:flex-row gap-4'>
          <div className='flex-1 flex items-center flex-col gap-2'>
            <PokemonsList pokemons={data.results} onPokemonCardClick={handlePokemonCardClick} />

            {isFetching && <Loader/>}
            <LargeButton disabled={isFetching} onClick={handleLoadMoreClick}>
              Load more
            </LargeButton>
          </div>

          <div className={`flex-1 static sm:sticky sm:top-1 h-max ${selectedPokemon ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>
            <PokemonDetailsCard pokemon={selectedPokemon}/>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
