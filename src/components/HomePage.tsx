import type { Character, Chapter } from '../types'
import PageHeader from './PageHeader'
import Section from './Section'
import CharacterGrid from './CharacterGrid'
import ChapterGrid from './ChapterGrid'
import Divider from './Divider'
import PageFooter from './PageFooter'

export interface HomePageProps {
  characters: Character[]
  chapters: Chapter[]
  onSelectChapter: (chapterNumber: number) => void
}

export default function HomePage({ characters, chapters, onSelectChapter }: HomePageProps) {
  return (
    <>
      <PageHeader
        titleCn="西游记"
        titleEn="Journey to the West"
        subtitle="吴承恩 · Wu Cheng'en, 1592 — A Pilgrimage of a Hundred Chapters"
      />

      <Section title="四位主角" subtitle="The Four Pilgrims">
        <CharacterGrid characters={characters} />
      </Section>

      <Divider label="目录" />

      <Section title="章节" subtitle="One Hundred Chapters — Click to Read">
        <ChapterGrid chapters={chapters} onSelectChapter={onSelectChapter} />
      </Section>

      <PageFooter text="宝典取经 · Crafted for reading the pilgrimage, one chapter at a time" />
    </>
  )
}