import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import { Home, HomeProps } from '.'


storiesOf('Components/Home', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => (
    <Home {...args} />
  ))
  .add('with some modification: ', () => (
    <Home {...args} />
  ))
