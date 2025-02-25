import styled from 'styled-components'

export const AppWrapper = styled.div`
  max-width: ${({ theme }) => theme['app-width']};
  margin: 0 auto;
  padding: 0 10rem;

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
