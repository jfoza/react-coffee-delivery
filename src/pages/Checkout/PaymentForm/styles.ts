import styled, { DefaultTheme } from 'styled-components'
import { Card } from '../Card/styles.ts'

export const FormCard = styled(Card)`
  margin-bottom: 1rem;
`

export const CardTitle = styled.div<{ iconColor: keyof DefaultTheme }>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: normal;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
  }

  svg {
    color: ${({ iconColor, theme }) => theme[iconColor]};
  }
`

export const PaymentMethodSelectCard = styled(Card)``

export const PaymentMethodSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`

export const ChosenPaymentMethodButton = styled.button`
  flex: 1;
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  background: ${({ theme }) => theme['base-button']};
  transition: 0.3s background-color;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-text']};
    font-weight: normal;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  &:focus {
    background: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme['purple-dark']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
