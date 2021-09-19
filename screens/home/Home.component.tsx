import { Text } from 'react-native'
import * as S from './home.styles'

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
