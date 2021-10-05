import * as React from 'react'
import * as S from './details.styles'
import { Text } from 'react-native'

export interface DetailsProps {
  testId?: string
}

const Item = () => {
  return (
    <>
      <S.Text>Item Sample</S.Text>
    </>
  )
}

export const Details = ({
  testId = 'component-details-id',
  ...props
}: DetailsProps) => {
  const data = [
    'No princípio Deus criou os céus e a terra.',
    'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
    'Disse Deus: "Haja luz", e houve luz.',
    'Deus viu que a luz era boa, e separou a luz das trevas.',
    'Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.',
    'Depois disse Deus: "Haja entre as águas um firmamento que separe águas de águas".'
  ]

  return <Text>asdfa sadfadfadf</Text>
}
