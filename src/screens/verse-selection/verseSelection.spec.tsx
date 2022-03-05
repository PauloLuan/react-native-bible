import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { VerseSelection } from './verseSelection.component'
import { buildMockitems } from './verseSelection.stories'

const mockData = buildMockitems()

describe('<VerseSelection />', () => {
  const testId = 'component-verse-selection-id'

  it('should render the VerseSelection component', async () => {
    const { findByText, queryByTestId, toJSON } = renderWithTheme(
      <VerseSelection data={mockData} testId={testId} />
    )

    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())

    // const toClick = await findByText('5')
    // console.log(toClick)
    // expect(toClick).toBe()
    // fireEvent.press(toClick)
    // expect(toJSON()).toMatchSnapshot()
  })
})
