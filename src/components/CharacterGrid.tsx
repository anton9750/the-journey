import styled from 'styled-components'
import type { Character } from '../types'
import CharacterCard from './CharacterCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.75rem;
`

export interface CharacterGridProps {
  characters: Character[]
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <Grid>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  )
}
