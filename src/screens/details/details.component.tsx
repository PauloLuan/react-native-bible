import * as React from 'react'
import * as S from './details.styles'

export interface DetailsProps {
  testId?: string
  headline: string
  chapter: string
  verses: string[]
}

const RenderVerses = ({ verses }: Pick<DetailsProps, 'verses'>) => {
  return (
    <>
      {verses.map((text, index) => (
        <S.Verse key={index}>
          <S.VerseNumber>{index + 1}-</S.VerseNumber> {text}
        </S.Verse>
      ))}
    </>
  )
}

export const Details = ({
  testId = 'component-details-id',
  headline,
  chapter,
  verses,
  ...props
}: DetailsProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <S.Headline>{headline}</S.Headline>
        <S.SubHeadline>{chapter}</S.SubHeadline>

        <RenderVerses verses={verses} />
      </S.Wrapper>
    </>
  )
}
