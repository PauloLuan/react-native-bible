import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin: ${RFValue(12)}px;
`

interface ListItem {
  id: number
  teste: number
}

// export const ListItems = styled(FlatList as new () => FlatList<ListItem>).attrs(
//   {
//     numColumns: 6
//   }
// )`
//   flex-direction: row;
//   flex-wrap: wrap;
// `

export const ListItems = styled.ScrollView``

export const ListView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export const Item = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${RFValue(62)}px;
  height: ${RFValue(62)}px;
  margin: ${RFValue(4)}px;
  background: ${({ theme }) => theme.colors.sandMedium};
`

export const ItemText = styled.Text`
  font-size: ${RFValue(24)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.greenDark};
  font-size: ${RFValue(36)}px;
  font-weight: bold;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.greenDark};
  font-size: ${RFValue(24)}px;
  font-weight: 200;
`
