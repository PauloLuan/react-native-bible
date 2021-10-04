import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Home } from '.'
import theme from '../../global/styles/theme'

const args = {}

storiesOf('Components/Home', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  ))
