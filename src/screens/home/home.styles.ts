import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`

export const Card = styled.View`
  width: 150px;
  height: 250px;
  margin: 10px;
  border-radius: 6px;
  background-color: red;
`

export const Image = styled.Image`
  height: 56px;
  width: 56px;
`
