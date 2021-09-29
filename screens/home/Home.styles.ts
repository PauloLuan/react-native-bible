import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    background-color: blue;
    width: 100%;
    height: 100%;
  `}
`

export const Text = styled.Text`
  color: red;
  font-size: 50px;
`
