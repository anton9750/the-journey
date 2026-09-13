import styled from 'styled-components'

const Placeholder = styled.div<{ $accent?: string }>`
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.4rem;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.03) 10px,
    rgba(255, 255, 255, 0.06) 10px,
    rgba(255, 255, 255, 0.06) 20px
  );
  border: 2px dashed ${(p) => p.$accent || 'var(--imperial-gold)'};
  color: var(--paper-dark);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HanziMark = styled.span<{ $accent?: string }>`
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2.5rem;
  color: ${(p) => p.$accent || 'var(--imperial-gold)'};
  opacity: 0.7;
`

const Label = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  opacity: 0.6;
`

export interface ImagePlaceholderProps {
  /** Optional real image URL. When omitted, a placeholder box is shown. */
  src?: string
  alt: string
  /** Single character shown in the placeholder, e.g. the first hanzi. */
  glyph?: string
  accentColor?: string
}

export default function ImagePlaceholder({ src, alt, glyph, accentColor }: ImagePlaceholderProps) {
  if (src) {
    return (
      <Placeholder $accent={accentColor}>
        <img src={src} alt={alt} />
      </Placeholder>
    )
  }

  return (
    <Placeholder $accent={accentColor}>
      {glyph && <HanziMark $accent={accentColor}>{glyph}</HanziMark>}
      <Label>Image of {alt}</Label>
    </Placeholder>
  )
}
