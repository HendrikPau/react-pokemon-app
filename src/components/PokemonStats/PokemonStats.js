import React from 'react'
import  { GridContent, StyledProperty, StyledValue, PokemonStat, StyledTitle, PokemonMove, StyledAttack } from './style'

export default function PokemonStats() {

    return (
        <GridContent>
          <StyledTitle>Stats</StyledTitle>
          <PokemonStat>
            <StyledProperty>Speed</StyledProperty>
            <StyledValue>50</StyledValue>
          </PokemonStat>
          <PokemonStat>
            <StyledProperty>Special-Defense</StyledProperty>
            <StyledValue>95</StyledValue>
          </PokemonStat>
          <PokemonStat>
            <StyledProperty>Speed</StyledProperty>
            <StyledValue>50</StyledValue>
          </PokemonStat>
          <PokemonStat>
            <StyledProperty>Speed</StyledProperty>
            <StyledValue>50</StyledValue>
          </PokemonStat>
          <StyledTitle>Selected moves</StyledTitle>
          <PokemonMove>
            Level-up
            <StyledAttack>Slam</StyledAttack>
          </PokemonMove>
          <PokemonMove>
            Level-up
            <StyledAttack>Stomp</StyledAttack>
          </PokemonMove>
          <PokemonMove>
            Level-up
            <StyledAttack>Wrap</StyledAttack>
          </PokemonMove>
          <PokemonMove>
            Level-up
            <StyledAttack>Defense curl</StyledAttack>
          </PokemonMove>
        </GridContent>
      )
}
