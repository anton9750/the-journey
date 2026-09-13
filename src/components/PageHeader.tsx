import styled, { keyframes } from 'styled-components'

const drift = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const StyledHeader = styled.header`
  position: relative;
  padding: 5rem 1.5rem 3rem;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(154, 27, 27, 0.25), transparent 70%);
  border-bottom: 3px solid var(--imperial-gold);

  &::before,
  &::after {
    content: '云';
    position: absolute;
    font-family: 'Ma Shan Zheng', cursive;
    font-size: 8rem;
    color: rgba(212, 175, 55, 0.06);
    animation: ${drift} 6s ease-in-out infinite;
  }
  &::before {
    top: 10%;
    left: 5%;
  }
  &::after {
    bottom: -10%;
    right: 5%;
    animation-delay: 2s;
  }
`

const TitleCN = styled.h1`
  font-size: clamp(3rem, 9vw, 6rem);
  color: var(--bright-gold);
  text-shadow: 0 0 20px rgba(242, 201, 76, 0.4), 3px 3px 0 var(--deep-red);
  letter-spacing: 0.3rem;
`

const TitleEN = styled.h2`
  font-family: 'Cinzel', serif;
  font-weight: 500;
  font-size: clamp(1rem, 3vw, 1.6rem);
  letter-spacing: 0.5rem;
  color: var(--paper-dark);
  margin-top: 0.75rem;
  text-transform: uppercase;
`

const SubTitle = styled.p`
  margin-top: 1rem;
  color: var(--paper-dark);
  opacity: 0.75;
  font-size: 0.95rem;
  letter-spacing: 0.1rem;
`

export interface PageHeaderProps {
  titleCn: string
  titleEn: string
  subtitle: string
}

export default function PageHeader({ titleCn, titleEn, subtitle }: PageHeaderProps) {
  return (
    <StyledHeader>
      <TitleCN>{titleCn}</TitleCN>
      <TitleEN>{titleEn}</TitleEN>
      <SubTitle>{subtitle}</SubTitle>
    </StyledHeader>
  )
}
