import React from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import PokemonSelect from '../PokemonSelect/PokemonSelect'
import PokemonSave from '../PokemonSave/PokemonSave'
import PokemonStats from '../PokemonStats/PokemonStats'
import PokemonMoves from '../PokemonMoves/PokemonMoves'
import  { GridContainer } from './style'

const client = new GraphQLClient({
    url: process.env.REACT_APP_POKE_ENDPOINT,
  });

export default function Grid() {

    return (
        <ClientContext.Provider value={client}>
        <GridContainer>
            <PokemonSelect />
            <PokemonSave />
            <PokemonStats />
            <PokemonMoves />
        </GridContainer>
        </ClientContext.Provider>
      )
}
