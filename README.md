# 西游记 · Journey to the West — Reader App

A Vite + React + TypeScript + styled-components site presenting the 100
chapters of *Journey to the West* as a clickable table of contents, plus a
showcase of the four main pilgrims (Sun Wukong, Tang Sanzang, Zhu Bajie,
Sha Wujing) with image placeholders you can swap for real artwork later.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  types/index.ts            Character and Chapter interfaces
  data.ts                    the 4 characters + 100 chapter titles (typed)
  utils/chineseNumerals.ts   number -> Chinese numeral helper
  GlobalStyle.ts             fonts, CSS variables, base reset
  components/
    Page.tsx                 outer page background wrapper
    PageHeader.tsx            big title banner (props: titleCn, titleEn, subtitle)
    Section.tsx                generic titled section wrapper (props: title, subtitle, children)
    ImagePlaceholder.tsx       dashed placeholder box, or real <img> if src is given
    CharacterCard.tsx           one pilgrim's card (props: character)
    CharacterGrid.tsx            maps characters[] -> CharacterCard
    ChapterCard.tsx               one chapter's clickable row (props: chapter, onSelect)
    ChapterGrid.tsx                maps chapters[] -> ChapterCard
    ChapterReader.tsx               full reading view for one chapter, with prev/next
    Divider.tsx                     small "目录" divider
    PageFooter.tsx                   bottom footer text
    MusicPlayer.tsx                  play/pause control for main menu music (props: src?, title?, loop?, defaultVolume?)
    HomePage.tsx                      composes header + music player + character grid + chapter grid
  App.tsx                    holds the only piece of state (which chapter is open)
                             and switches between HomePage and ChapterReader
  main.tsx                   React root + GlobalStyle mount
```

Every component takes explicit props (typed with TypeScript interfaces) and
does one job — nothing is hardcoded inside `App.tsx` anymore.

## Where to add your content

- **Chapter titles** are in `src/data.ts` (`chapterTitles` array), already
  filled in with all 100 traditional titles, mapped into `Chapter` objects.
- **Chapter text**: add a `text` field to a chapter's object in `data.ts`
  (the `Chapter` interface already has an optional `text?: string`).
  `ChapterReader` will automatically render it instead of the placeholder
  note once it's present.
- **Character images**: set `imageUrl` on a character in the `characters`
  array in `data.ts`. `ImagePlaceholder` will render a real `<img>` instead
  of the dashed placeholder box as soon as `imageUrl` is set.
- **Main menu music**: drop an audio file into `public/audio/` (there's a
  README.txt placeholder in there), then in `src/components/HomePage.tsx`
  set the `src` prop on `<MusicPlayer />` to its path, e.g.
  `src="/audio/main-theme.mp3"`. Until a `src` is set, the button shows as
  a disabled "Add music file" placeholder in the top-right corner.

## Fonts & Palette

- **Ma Shan Zheng** — brush-calligraphy Google Font for titles/hanzi
- **Noto Serif SC** — body text, full Chinese character support
- **Cinzel** — small-caps English labels for an imperial feel
- Palette: lacquer red, imperial gold, jade green, dragon blue on a dark ink
  background, echoing traditional Chinese temple and scroll coloring.
