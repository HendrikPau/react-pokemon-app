import React from 'react'
import  { GridContent, StyledTitle, StyledMove } from './style'

export default function PokemonMoves() {

    return (
        <GridContent>
          <StyledTitle>Tutor machine level-up</StyledTitle>
          <ul>
            {/* loop through moves from query */}
            <StyledMove>Slam</StyledMove>
          </ul>
        </GridContent>
      )
}
