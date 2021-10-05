import styled from 'styled-components'

export const GridContainer = styled.div`
    display: grid;    
    width: 100%;
    height: 400px;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2rem;
`
