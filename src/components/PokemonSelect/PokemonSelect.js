import React from 'react'
import { useQuery } from 'graphql-hooks'
import Downshift from 'downshift'
import { POKEMON_LIST } from '../../database/PokemonOverview'
import { PokeName, PokeList, StyledLabel } from './style';
// import  { GridContent } from './style'

export default function PokemonSelect(props) {
  const { loading, error, data } = useQuery(POKEMON_LIST);
  
  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

    return (
      <Downshift 
      onChange={selection =>
        props.SelectPokemon(selection.name)
      }
      itemToString={pokemon => (pokemon ? pokemon.name : '')}
       >
        {({getLabelProps, getInputProps, getMenuProps, getItemProps, highlightedIndex, selectedItem, inputValue})=> (
  
          <div>
            <StyledLabel>Select a Pokemon</StyledLabel>
            <input {...getInputProps({
              placeholder: "TYPE TO FILTER"
            })}/>
            <PokeList {...getMenuProps()}>
            {data.Pokemons.filter(pokemon => !inputValue || pokemon.name.includes(inputValue)).map((pokemon,index) => (
               <PokeName{...getItemProps({
                key: pokemon,
                index,
                pokemon
              })}>{pokemon.name}</PokeName>
            ))}
          </PokeList>
          </div>
        )}
      </Downshift>
      )
}
