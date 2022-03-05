import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

// import { HomeProps } from '.'

export const Wrapper = styled.ScrollView`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${RFValue(12)}px;
    width: 100%;
    height: 100%;
  `}
`

export const Headline = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  font-size: ${RFValue(50)}px;
  font-weight: bold;
`

export const SubHeadline = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryLight};
  color: black;
  font-size: ${RFValue(22)}px;
  font-style: italic;
  margin-bottom: ${RFValue(26)}px;
`

export const Verse = styled.Text`
  /* font-family: ${({ theme }) => theme.fonts.primaryMedium}; */
  color: black;
  font-size: ${RFValue(18)}px;
  font-weight: 300;
  line-height: 24px;
  margin: 4px 0;
`

export const VerseNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryLight};
  color: black;
  font-size: ${RFValue(12)}px;
  font-weight: 100;
  font-style: italic;
  margin: 4px 0;
`
