import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import { Details } from '../screens/details'
import { Home } from '../screens/home'

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  )
}
