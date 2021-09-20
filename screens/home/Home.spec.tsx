import { render, waitFor } from '@testing-library/react-native'
import * as React from 'react'
import { Home } from './Home.component'

// import theme from '../../styles/Theme'

describe('<Home />', () => {
  const testId = 'component-home-id'

  it('should render the Home component', async () => {
    const { queryByTestId, toJSON } = render(<Home testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
