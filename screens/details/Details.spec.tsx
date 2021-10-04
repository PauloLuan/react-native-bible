import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { render, waitFor } from '@testing-library/react-native'

import { Details } from '.'
// import theme from '../../styles/Theme'

describe('<Details />', () => {
  const testId = 'component-details-id'

  it('should render the Details component', () => {
    const { getByTestId, queryByTestId, toJSON } = render(
      <Details testId={testId} />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
