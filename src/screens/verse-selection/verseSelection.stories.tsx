import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { VerseSelection } from './verseSelection.component'

const _buildMockitems = () => {
  const data = []

  for (let index = 0; index < 290; index++) {
    data.push({
      id: index,
      teste: index
    })
  }

  return data
}

const args = {
  data: _buildMockitems()
}

storiesOf('Components/VerseSelection', module).add('default: ', () => (
  <VerseSelection data={args.data} />
))
