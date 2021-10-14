import React from 'react'
import * as S from './verseSelection.styles'

interface ListItem {
  id: number
  teste: number
}

export interface VerseSelectionProps {
  testId?: string
  data: ListItem[]
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
  data,
  ...props
}: VerseSelectionProps) => {
  return (
    <S.Wrapper testID={testId} {...props}>
      <S.Title>Genesis</S.Title>

      {/* <S.ListItems<React.ElementType>
        data={data}
        keyExtractor={(item: ListItem) => item.id.toString()}
        renderItem={renderItem}
      ></S.ListItems> */}

      <S.ListItems>{data.map((item) => renderItem({ item }))}</S.ListItems>
    </S.Wrapper>
  )
}
