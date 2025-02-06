import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  padding: 0 10rem;
  margin-bottom: 5.7rem;

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

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 700;

  margin-bottom: 54px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
  justify-content: center;
`
