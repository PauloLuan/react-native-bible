import { render } from '@testing-library/react-native'
import * as React from 'react'
import { MonoText } from '../StyledText'

describe(`Styled Text:`, () => {
  it(`renders correctly`, () => {
    const tree = render(<MonoText>Snapshot test!</MonoText>).toJSON()

    tree

    expect(tree).toMatchSnapshot()
  })
})
