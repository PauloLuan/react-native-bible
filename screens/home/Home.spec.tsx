import React from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {render, waitFor} from '@testing-library/react-native'

import { Home } from '.'
// import theme from '../../styles/Theme'

describe('<Home />', () => {
  const testId = 'component-home-id'

  it('should render the Home component', () => {
    const {getByTestId, queryByTestId, toJSON} = render(<Home testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
