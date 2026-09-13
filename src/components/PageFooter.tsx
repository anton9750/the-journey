import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  padding: 2rem;
  color: var(--paper-dark);
  opacity: 0.5;
  font-size: 0.8rem;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.1rem;
`

export interface PageFooterProps {
  text: string
}

export default function PageFooter({ text }: PageFooterProps) {
  return <StyledFooter>{text}</StyledFooter>
}
