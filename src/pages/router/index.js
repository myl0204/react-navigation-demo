import React, { PureComponent } from 'react'
import { createStackNavigator } from 'react-navigation'
import HeaderRight from '../../components/HeaderRight'
import Home from '../Home'
import GoodDetail from '../GoodDetail'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '首页'
      }
    },
    GoodDetail: {
      screen: GoodDetail,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        headerStyle: {
            borderBottomWidth: 0,
        },
        headerTintColor: '#313131',
        shadowOpacity: 0,
        headerRight: <HeaderRight navigation={navigation}/>
      })
    }
  }
)

export default class App extends PureComponent {
  render() {
    return <AppNavigator/>
  }
}