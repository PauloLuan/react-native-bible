import * as React from 'react'
import * as S from './details.styles'

export interface DetailsProps {
  testId?: string
}

export const Details = ({
  testId = 'component-details-id',
  ...props
}: DetailsProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        Body...
      </S.Wrapper>
    </>
  )
}
