import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.9rem;
  background: rgba(26, 20, 16, 0.75);
  border: 1px solid var(--imperial-gold);
  border-radius: 999px;
  backdrop-filter: blur(6px);
`

const ToggleButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--lacquer-red);
  color: var(--paper);
  font-size: 0.9rem;
  transition: background 0.2s ease;

  &:hover {
    background: var(--deep-red);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

const Label = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  color: var(--paper-dark);
  white-space: nowrap;
`

export interface MusicPlayerProps {
  /**
   * Path to the music file, e.g. '/audio/main-theme.mp3'.
   * Drop your file into the `public/audio` folder and point this at it.
   * Leave undefined to show a disabled placeholder control.
   */
  src?: string
  /** Displayed next to the play button. */
  title?: string
  loop?: boolean
  defaultVolume?: number
}

export default function MusicPlayer({
  src,
  title = 'Main Theme',
  loop = true,
  defaultVolume = 0.5,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = defaultVolume
    }
  }, [defaultVolume, src])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {
        // Autoplay / decode errors are swallowed here; add your own
        // error handling once a real audio file is wired up.
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <Wrap>
      <ToggleButton onClick={togglePlayback} disabled={!src} aria-label={isPlaying ? 'Pause music' : 'Play music'}>
        {isPlaying ? '❚❚' : '▶'}
      </ToggleButton>
      <Label>{src ? title : 'Add music file'}</Label>
      {src && <audio ref={audioRef} src={src} loop={loop} preload="none" onEnded={() => setIsPlaying(false)} />}
    </Wrap>
  )
}
