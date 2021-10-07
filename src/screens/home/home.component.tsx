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

        <S.Card>
          <S.CardHeader>
            <S.Headline>Genesis</S.Headline>
          </S.CardHeader>
          <S.CardFooter>
            <S.Image
              source={{
                uri: testament.new.eph
              }}
            />
          </S.CardFooter>
        </S.Card>

        <S.Card>
          <S.CardHeader>
            <S.Headline>Deuteronomio</S.Headline>
          </S.CardHeader>
          <S.CardFooter>
            <S.Image
              source={{
                uri: testament.new.johngospel1
              }}
            />
          </S.CardFooter>
        </S.Card>

        <S.Card>
          <S.CardHeader>
            <S.Headline>Lamentações de Jeremias</S.Headline>
          </S.CardHeader>
          <S.CardFooter>
            <S.Image
              source={{
                uri: testament.new.james
              }}
            />
          </S.CardFooter>
        </S.Card>
      </S.Wrapper>
    </>
  )
}
