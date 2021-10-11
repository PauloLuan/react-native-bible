import { waitFor } from '@testing-library/react-native'
import * as React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Details } from './details.component'
// import theme from '../../styles/Theme'

describe('<Details />', () => {
  const testId = 'component-details-id'

  it('should render the Details component', async () => {
    const { queryByTestId, toJSON } = renderWithTheme(
      <Details
        testId={testId}
        headline="teste"
        chapter="1"
        verses={['1', '2']}
      />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
