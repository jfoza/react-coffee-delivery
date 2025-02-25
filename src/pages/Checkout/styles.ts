import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme['base-subtitle']};

  margin-bottom: 54px;
`

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: start;
  justify-content: center;
`

export const CheckoutLeft = styled.section`
  width: 640px;
`

export const CheckoutRight = styled.section`
  width: 448px;
  height: 498px;
`
