import styled from 'styled-components'
import type { Character } from '../types'
import ImagePlaceholder from './ImagePlaceholder'

const Card = styled.div<{ $accent?: string }>`
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.2));
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 14px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px ${(p) => p.$accent || 'var(--imperial-gold)'};
    border-color: ${(p) => p.$accent || 'var(--imperial-gold)'};
  }
`

const Name = styled.h4`
  font-size: 1.6rem;
  color: var(--paper);
`

const Hanzi = styled.div<{ $accent?: string }>`
  font-family: 'Ma Shan Zheng', cursive;
  color: ${(p) => p.$accent || 'var(--imperial-gold)'};
  font-size: 1.1rem;
  margin: 0.15rem 0 0.5rem;
`

const TitleTag = styled.div<{ $accent?: string }>`
  display: inline-block;
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  color: var(--ink);
  background: ${(p) => p.$accent || 'var(--imperial-gold)'};
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
`

const Blurb = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--paper-dark);
  opacity: 0.85;
`

export interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { name, hanzi, title, color, blurb, imageUrl } = character

  return (
    <Card $accent={color}>
      <ImagePlaceholder src={imageUrl} alt={name} glyph={hanzi[0]} accentColor={color} />
      <Name>{name}</Name>
      <Hanzi $accent={color}>{hanzi}</Hanzi>
      <TitleTag $accent={color}>{title}</TitleTag>
      <Blurb>{blurb}</Blurb>
    </Card>
  )
}
