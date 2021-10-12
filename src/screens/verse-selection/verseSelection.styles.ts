import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

interface ListItem {
  id: number
  teste: number
}

export const ListItems = styled(FlatList as new () => FlatList<ListItem>).attrs(
  {
    horizontal: true
  }
)`
  flex: 1;
`

export const Item = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin: ${RFValue(4)}px;
  background: ${({ theme }) => theme.colors.sandDark};
`

export const ItemText = styled.Text`
  font-size: ${RFValue(24)}px;
`
