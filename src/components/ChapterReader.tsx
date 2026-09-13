import styled from 'styled-components'
import type { Chapter } from '../types'

const Wrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem 6rem;
`

const BackButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--bright-gold);
  font-family: 'Cinzel', serif;
  letter-spacing: 0.1rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--bright-gold);
  }
`

const ReaderHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(212, 175, 55, 0.3);
`

const ChapterNum = styled.div`
  font-family: 'Cinzel', serif;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: var(--imperial-gold);
  margin-bottom: 0.5rem;
`

const ReaderTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--bright-gold);
`

const Body = styled.div`
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--paper-dark);
  min-height: 40vh;
  white-space: pre-wrap;
`

const PlaceholderNote = styled.p`
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  opacity: 0.5;
  border: 1px dashed rgba(212, 175, 55, 0.4);
  padding: 3rem 1.5rem;
  border-radius: 10px;
`

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 1rem;
`

const NavButton = styled.button`
  all: unset;
  cursor: pointer;
  flex: 1;
  text-align: center;
  padding: 0.9rem 1rem;
  background: rgba(154, 27, 27, 0.2);
  border: 1px solid var(--lacquer-red);
  border-radius: 8px;
  color: var(--paper);
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:hover {
    background: var(--lacquer-red);
  }
`

export interface ChapterReaderProps {
  chapter: Chapter
  totalChapters: number
  onBack: () => void
  onNavigate: (chapterNumber: number) => void
}

export default function ChapterReader({ chapter, totalChapters, onBack, onNavigate }: ChapterReaderProps) {
  const isFirst = chapter.number === 1
  const isLast = chapter.number === totalChapters

  return (
    <Wrap>
      <BackButton onClick={onBack}>&larr; Back to Table of Contents</BackButton>

      <ReaderHeader>
        <ChapterNum>
          Chapter {chapter.number} of {totalChapters}
        </ChapterNum>
        <ReaderTitle>{chapter.title}</ReaderTitle>
      </ReaderHeader>

      <Body>
        {chapter.text ? (
          chapter.text
        ) : (
          <PlaceholderNote>
            Text for this chapter has not been added yet.
            <br />
            Paste the chapter content here.
          </PlaceholderNote>
        )}
      </Body>

      <NavRow>
        <NavButton disabled={isFirst} onClick={() => onNavigate(chapter.number - 1)}>
          &larr; Previous
        </NavButton>
        <NavButton disabled={isLast} onClick={() => onNavigate(chapter.number + 1)}>
          Next &rarr;
        </NavButton>
      </NavRow>
    </Wrap>
  )
}
