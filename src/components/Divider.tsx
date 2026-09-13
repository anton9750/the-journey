import styled from 'styled-components'

const StyledDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto 3rem;
  max-width: 400px;
  color: var(--imperial-gold);
  opacity: 0.6;
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 1.2rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: currentColor;
  }
`

export interface DividerProps {
  label?: string
}

export default function Divider({ label }: DividerProps) {
  return <StyledDivider>{label}</StyledDivider>
}
