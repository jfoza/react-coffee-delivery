import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const HeaderLogo = styled.img`
  width: 85px;
  height: 40px;
`

export const CartWithLocation = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`

export const BadgeLocationIcon = styled.span`
  height: 38px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const BadgeCartIcon = styled.span`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme['yellow-light']};
  border-radius: 6px;
  position: relative; /* Necessário para posicionar o badge */

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const CartItemCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme['yellow-dark']};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`
