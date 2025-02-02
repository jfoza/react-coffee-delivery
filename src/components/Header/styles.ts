import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1200px) {
    padding: 0 5rem;
  }

  @media (max-width: 992px) {
    padding: 0 4rem;
  }

  @media (max-width: 768px) {
    padding: 0 3rem;
  }

  @media (max-width: 576px) {
    padding: 0 2rem;
  }
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

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`
