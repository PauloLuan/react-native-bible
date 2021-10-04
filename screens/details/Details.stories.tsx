import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import { Details, DetailsProps } from '.'

const args = {}

storiesOf('Components/Details', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => <Details {...args} />)
  .add('with some modification: ', () => <Details {...args} />)
