import React from 'react'
import * as S from './verseSelection.styles'

interface ListItem {
  id: number
  teste: number
}

const data = [
  { id: 1, teste: 1 },
  { id: 2, teste: 2 },
  { id: 3, teste: 3 }
]

export interface VerseSelectionProps {
  testId?: string
}

const renderItem = ({ item, index }: { item: ListItem; index: number }) => {
  return (
    <S.Item>
      <S.ItemText>{item.id}</S.ItemText>
    </S.Item>
  )
}

export const VerseSelection = ({
  testId = 'component-verse-selection-id',
  ...props
}: VerseSelectionProps) => {
  return (
    <S.Wrapper testID={testId} {...props}>
      <S.ListItems<React.ElementType>
        data={data}
        keyExtractor={(item: ListItem) => item.id}
        renderItem={renderItem}
      ></S.ListItems>
    </S.Wrapper>
  )
}
