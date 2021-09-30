import * as React from 'react'
import * as S from './home.styles'

export interface HomeProps {
  testId?: string
}

const Item = () => {
  return (
    <>
      <S.Text>Item Sample</S.Text>
    </>
  )
}

export const Home = ({ testId = 'component-home-id', ...props }: HomeProps) => {
  const data = [
    'No princípio Deus criou os céus e a terra.',
    'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
    'Disse Deus: "Haja luz", e houve luz.',
    'Deus viu que a luz era boa, e separou a luz das trevas.',
    'Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.',
    'Depois disse Deus: "Haja entre as águas um firmamento que separe águas de águas".'
  ]

  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <S.Headline>Genesis</S.Headline>
        <S.SubHeadline>Subheadline</S.SubHeadline>

        {data.map((text, index) => (
          <S.Text key={index}>{text}</S.Text>
        ))}
      </S.Wrapper>
    </>
  )
}
