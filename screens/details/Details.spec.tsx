import { render, waitFor } from '@testing-library/react-native'
import * as React from 'react'
import { Details } from './Details.component'

// import theme from '../../styles/Theme'

describe('<Details />', () => {
  const testId = 'component-details-id'

  it('should render the Details component', async () => {
    const { queryByTestId, toJSON } = render(<Details testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
