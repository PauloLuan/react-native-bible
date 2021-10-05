import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.View`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${RFValue(12)}px;
    width: 100%;
    height: 100%;
  `}
`

export const Headline = styled.Text`
  font-family: Arial;
  font-size: ${RFValue(50)}px;
  font-weight: bold;
`

export const SubHeadline = styled.Text`
  color: black;
  font-size: ${RFValue(22)}px;
  font-style: italic;
  font-weight: 200;
  margin-bottom: ${RFValue(26)}px;
`

export const Text = styled.Text`
  color: black;
  font-size: ${RFValue(16)}px;
  font-weight: 300;
  margin: 4px 0;
`
