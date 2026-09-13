import type { ReactNode } from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`

const Title = styled.h3`
  font-size: 2.2rem;
  color: var(--imperial-gold);
  text-align: center;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  text-align: center;
  color: var(--paper-dark);
  opacity: 0.7;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 2.5rem;
`

export interface SectionProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </StyledSection>
  )
}
