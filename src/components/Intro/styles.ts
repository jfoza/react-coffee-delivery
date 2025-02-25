import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 5.7rem 0;
`

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: normal;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const IntroImgContainer = styled.div`
  display: flex;
  justify-content: end;

  div {
    max-width: 455px;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  @media (max-width: 992px) {
    div {
      max-width: 80%;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const IntroImgTextTop = styled.div`
  margin-bottom: 66px;
`

export const IntroImgTextBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex: 1 1 48%;
  }
`
