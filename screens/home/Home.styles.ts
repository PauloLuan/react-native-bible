import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    background-color: blue;
    width: 85px;
    height: 60px;
  `}
`

export const Text = styled.Text`
  color: red;
  font-size: 50px;
`
