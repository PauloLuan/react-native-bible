import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Details } from './details.component'
// import { ThemeProvider } from 'styled-components/native'
// import theme from '@global/styles/theme'

const args = {
  headline: 'Genesis',
  chapter: 'Capítulo 1',
  verses: [
    'No princípio Deus criou os céus e a terra.',
    'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
    'Disse Deus: "Haja luz", e houve luz.',
    'Deus viu que a luz era boa, e separou a luz das trevas.',
    'Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.',
    'No princípio Deus criou os céus e a terra.',
    'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
    'Disse Deus: "Haja luz", e houve luz.',
    'Deus viu que a luz era boa, e separou a luz das trevas.',
    'Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.',
    'No princípio Deus criou os céus e a terra.',
    'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
    'Disse Deus: "Haja luz", e houve luz.',
    'Deus viu que a luz era boa, e separou a luz das trevas.',
    'Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.',
    'No princípio Deus criou os céus e a terra.',
    'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
    'Disse Deus: "Haja luz", e houve luz.',
    'Deus viu que a luz era boa, e separou a luz das trevas.',
    'Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.',
    'No princípio Deus criou os céus e a terra.',
    'Era a terra sem forma e vazia; trevas cobriam a face do abismo, e o Espírito de Deus se movia sobre a face das águas.',
    'Disse Deus: "Haja luz", e houve luz.',
    'Deus viu que a luz era boa, e separou a luz das trevas.',
    'Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.',
    'Depois disse Deus: "Haja entre as águas um firmamento que separe águas de águas".'
  ]
}

storiesOf('Components/Details', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => (
    // <ThemeProvider theme={theme}>
    <Details {...args} />
    // </ThemeProvider>
  ))
