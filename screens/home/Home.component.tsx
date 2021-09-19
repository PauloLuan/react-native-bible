import * as S from './home.styles'
import {Text} from 'react-native'

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: HomeProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <Text>example</Text>
      </S.Wrapper>
    </>
  )
}
