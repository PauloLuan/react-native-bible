import { render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Details } from '.'
import theme from '../../global/styles/theme'

describe('<Details />', () => {
  const testId = 'component-details-id'

  it('should render the Details component', async () => {
    const { queryByTestId, toJSON } = render(
      <ThemeProvider theme={theme}>
        <Details testId={testId} />
      </ThemeProvider>
    )

    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
    expect(toJSON()).toMatchSnapshot()
  })
})
