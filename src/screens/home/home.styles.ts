import styled, { css } from 'styled-components/native'
import { ScrollViewProps } from 'react-native'

// import { HomeProps } from '.'

export const Wrapper = styled.ScrollView.attrs<ScrollViewProps>({
  horizontal: true
})`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
  `}
`

export const Headline = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const Card = styled.View`
  justify-content: space-between;
  width: 200px;
  height: 270px;
  margin: 10px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.sandDark};
`

export const CardHeader = styled.View`
  align-items: center;
  padding: 12px;
`

export const CardFooter = styled.View`
  height: 100px;
  justify-content: flex-end;
  align-items: flex-end;
`

export const Image = styled.Image.attrs({
  resizeMode: 'contain'
})`
  position: relative;
  height: 200px;
  width: 200px;
`
