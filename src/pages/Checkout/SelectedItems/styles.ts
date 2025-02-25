import styled from 'styled-components'
import { Card } from '../Card/styles.ts'

export const SelectedItemsCard = styled(Card)`
  border-radius: 5px 30px 5px 30px;

  a {
    text-decoration: none;
  }
`

export const SelectedItemsContainer = styled.div``

export const SelectedCoffees = styled.div`
  max-height: 245px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme['base-button']} transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`

export const CoffeeItem = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  position: relative;
  padding: 24px 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: ${({ theme }) => theme['base-button']};
  }
`

export const CoffeeItemLeftContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
`

export const OrderSummary = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:first-child {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > div:last-child {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 46px;

  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  text-decoration: none;

  &:focus {
    box-shadow: none;
  }
`

export const Image = styled.img`
  width: 64px;
  height: 64px;
`

export const CoffeeTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;

  border-radius: 6px;
  border: none;
  padding: 0.3rem;
  cursor: pointer;

  background: ${({ theme }) => theme['base-button']};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;

    color: ${({ theme }) => theme['base-text']};
  }

  &:focus {
    box-shadow: none;
  }
`

export const CoffeeItemRightContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
`

export const Price = styled.span`
  display: flex;
  gap: 3px;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;

  color: ${({ theme }) => theme['base-text']};
`
