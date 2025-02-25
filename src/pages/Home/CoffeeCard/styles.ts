import styled from 'styled-components'

export const Card = styled.div`
  max-width: 256px;
  height: 310px;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 5px 30px 5px 30px;
  transition: transform 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`

export const Image = styled.img`
  width: 120px;
  height: 120px;

  margin-top: -20px;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
`

export const Tag = styled.span`
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 50rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: bold;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  color: ${({ theme }) => theme['base-label']};
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const MonetarySymbol = styled.span`
  font-size: 0.875rem;

  color: ${({ theme }) => theme['base-text']};
`

export const Value = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme['base-text']};
`

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CartIcon = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  background: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};
  margin-left: 0.5rem;
`
