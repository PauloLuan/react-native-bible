import React from 'react'
import * as S from './home.styles'
import { testament } from '@constants/Images'

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: HomeProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        {/* <S.Text>sdfa </S.Text> */}
        <S.Image
          source={{
            uri: testament.new.eph
          }}
        />
        <S.Card></S.Card>
        <S.Card />
        <S.Card />
      </S.Wrapper>
    </>
  )
}
