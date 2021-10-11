import React from 'react'
import * as S from './verseSelection.styles'

export interface VerseSelectionProps {
  testId?: string
}

export const VerseSelection = ({
  testId = 'component-verse-selection-id',
  ...props
}: VerseSelectionProps) => {
  return <S.Wrapper testID={testId} {...props}></S.Wrapper>
}
