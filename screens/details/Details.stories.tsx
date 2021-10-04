import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Details } from '.'

const args = {}

storiesOf('Components/Details', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => <Details />)
