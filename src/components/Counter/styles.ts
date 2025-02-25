import styled from 'styled-components'

export const CounterContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
`

export const CounterButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: ${({ theme }) => theme.purple};
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme['purple-dark']};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`

export const Quantity = styled.div`
  flex: 1;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme['base-title']};
`
