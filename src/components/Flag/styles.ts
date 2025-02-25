import styled, { DefaultTheme } from 'styled-components'

export const FlagContainer = styled.div`
  width: max-content;
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;

    font-size: 1rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme['base-text']};
  }
`

export type TBackgroundColor = keyof DefaultTheme

export const Rounded = styled.div<{ $backgroundColor: TBackgroundColor }>`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.white};
  }

  border-radius: 50%;
  background: ${({ $backgroundColor, theme }) => theme[$backgroundColor]};
`
