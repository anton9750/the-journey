import { useState } from 'react'
import { characters, chapters } from './data'
import Page from './components/Page'
import HomePage from './components/HomePage'
import ChapterReader from './components/ChapterReader'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  const [activeChapterNumber, setActiveChapterNumber] = useState<number | null>(null)

  const activeChapter = activeChapterNumber
    ? chapters.find((c) => c.number === activeChapterNumber)
    : undefined

  return (
    <Page>
      <MusicPlayer src="/audio/wukong.mp3" title="Main Theme" />

      {activeChapter ? (
        <ChapterReader
          chapter={activeChapter}
          totalChapters={chapters.length}
          onBack={() => setActiveChapterNumber(null)}
          onNavigate={setActiveChapterNumber}
        />
      ) : (
        <HomePage characters={characters} chapters={chapters} onSelectChapter={setActiveChapterNumber} />
      )}
    </Page>
  )
}