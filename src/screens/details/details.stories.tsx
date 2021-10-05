import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Details } from './details.component'
import { ThemeProvider } from 'styled-components/native'
import theme from '@global/styles/theme'

const args = {}

storiesOf('Components/Details', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => (
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  ))
