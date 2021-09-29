import * as React from 'react'
import * as S from './home.styles'

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: HomeProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <S.Text>Body...</S.Text>
      </S.Wrapper>
    </>
  )
}
