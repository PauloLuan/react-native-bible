import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { VerseSelection } from './verseSelection.component'

describe('<VerseSelection />', () => {
  const testId = 'component-verse-selection-id'

  it('should render the VerseSelection component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(
      <VerseSelection testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
