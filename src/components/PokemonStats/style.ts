import styled from 'styled-components'

export const GridContent = styled.div`
    grid-column: 3 / 5;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const PokemonStat = styled.div`
grid-columns: 1fr, 1fr;

`

export const StyledTitle = styled.h3`
    color: #3a5d9f;
    grid-column: 1 / 3;
    text-transform: uppercase;
`

export const StyledProperty = styled.p`
    color: #fdcc07;
    display: inline;
    text-align: right;
`

export const StyledValue = styled.p`
    font-size: 2.5rem;
    color: #3a5d9f;
    display: inline;
    text-align: left;
    margin-left: .5rem;
`

export const PokemonMove = styled.div`
    border: 2px solid #3a5d9f;
    background: white;
    padding: .2rem;
    margin: .2rem;
    text-align: left;
    color: #fdcc07;
    text-transform: uppercase;
    font-size: .8rem;
    display: inline;
`

export const StyledAttack = styled.p`
    color: #3a5d9f;
    margin: .2rem 0;
    font-size: 1.2rem;
`