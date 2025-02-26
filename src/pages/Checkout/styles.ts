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

export const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const CartEmpty = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: ${({ theme }) => theme.purple};

  svg {
    color: ${({ theme }) => theme.background};
  }
`

export const Text = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: normal;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CheckoutLeft = styled.section`
  width: 640px;
`

export const CheckoutRight = styled.section`
  width: 448px;
  height: 498px;
`
