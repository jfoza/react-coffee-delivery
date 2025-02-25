import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
`

export const OrderSuccessContainer = styled.div`
  width: 100%;
`

export const OrderSuccessHeader = styled.div`
  margin-bottom: 30px;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const OrderSuccessMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const OrderSuccessLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 570px;
  height: 270px;
  border-radius: 5px 30px 5px 30px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.purple}
  );
  padding: 1px;
`

export const OrderSuccessContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: ${({ theme }) => theme.background};
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const OrderSuccessImg = styled.img``
