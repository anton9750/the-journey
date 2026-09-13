import styled from 'styled-components'
import type { Chapter } from '../types'
import { toChineseNumeral } from '../utils/chineseNumerals'

const Card = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: linear-gradient(135deg, rgba(154, 27, 27, 0.15), rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 10px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: var(--bright-gold);
    background: linear-gradient(135deg, rgba(154, 27, 27, 0.3), rgba(0, 0, 0, 0.35));
    transform: translateX(4px);
  }
`

const Number = styled.div`
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 1.8rem;
  color: var(--bright-gold);
  min-width: 2.5rem;
  text-align: center;
  flex-shrink: 0;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  text-align: left;
  overflow: hidden;
`

const Label = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: var(--paper-dark);
  opacity: 0.6;
`

const TitleText = styled.span`
  font-size: 0.95rem;
  color: var(--paper);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export interface ChapterCardProps {
  chapter: Chapter
  onSelect: (chapterNumber: number) => void
}

export default function ChapterCard({ chapter, onSelect }: ChapterCardProps) {
  return (
    <Card onClick={() => onSelect(chapter.number)}>
      <Number>{toChineseNumeral(chapter.number)}</Number>
      <Info>
        <Label>Chapter {chapter.number}</Label>
        <TitleText>{chapter.title}</TitleText>
      </Info>
    </Card>
  )
}
