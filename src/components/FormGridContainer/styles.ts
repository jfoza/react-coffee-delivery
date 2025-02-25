import styled from 'styled-components'

interface FormGroupProps {
  col?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export const FormGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.7rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;
  grid-column: span
    ${({ col, sm, md, lg, xl, xxl }) =>
      xxl ?? xl ?? lg ?? md ?? sm ?? col ?? 12};
  margin-bottom: 0.2rem;

  @media (max-width: 1400px) {
    grid-column: span
      ${({ xl, lg, md, sm, col }) => xl ?? lg ?? md ?? sm ?? col ?? 12};
  }

  @media (max-width: 1200px) {
    grid-column: span ${({ lg, md, sm, col }) => lg ?? md ?? sm ?? col ?? 12};
  }

  @media (max-width: 992px) {
    grid-column: span ${({ md, sm, col }) => md ?? sm ?? col ?? 12};
  }

  @media (max-width: 768px) {
    grid-column: span ${({ sm, col }) => sm ?? col ?? 12};
  }

  input,
  select {
    height: 2.625rem;
    color: ${({ theme }) => theme['base-label']};
    background: ${({ theme }) => theme['base-button']};
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme['base-input']};
    border-radius: 4px;

    &:focus {
      border: 1px solid ${({ theme }) => theme['yellow-dark']};
    }
  }
`
