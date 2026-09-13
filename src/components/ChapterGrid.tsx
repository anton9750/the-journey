import styled from 'styled-components'
import type { Chapter } from '../types'
import ChapterCard from './ChapterCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.1rem;
`

export interface ChapterGridProps {
  chapters: Chapter[]
  onSelectChapter: (chapterNumber: number) => void
}

export default function ChapterGrid({ chapters, onSelectChapter }: ChapterGridProps) {
  return (
    <Grid>
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.number} chapter={chapter} onSelect={onSelectChapter} />
      ))}
    </Grid>
  )
}
