import React, { PureComponent } from 'react'
import { StyleSheet, View, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native'
import { Icon, InputItem, List } from 'antd-mobile-rn'
import debounce from 'lodash.debounce'
import { px2p } from '../utils'

const styles = StyleSheet.create({
  container: {
    height: px2p(42),
    paddingRight: px2p(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  backIcon: {
    width: px2p(21),
    height: px2p(15),
    paddingLeft: px2p(11),
    paddingRight: px2p(11),
    marginRight: px2p(15),
    backgroundColor: 'gray'
  }
})

const searchBarStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: px2p(15),
    height: px2p(29),
    borderRadius: px2p(15),
    backgroundColor: '#F6F7F8'
  },
  icon: {
    width: px2p(15),
    height: px2p(15),
    marginRight: px2p(9),
    backgroundColor: '#999'
  }
})

class SearchBar extends PureComponent {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  onChange = debounce((input) => {
    this.setState({
      input
    })

    this.props.navigation.setParams({input})
  }, 300)

  render() {
    return (
      <View style={searchBarStyles.container}>
        <Image style={searchBarStyles.icon}/>
        <TextInput
          placeholder="搜索您要卖的机型"
          value={this.state.input}
          onChangeText={this.onChange}
        />
      </View>
    )
  }
}

function PhoneHeader({navigation}) {
  function goBack() {
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView backgroundColor="#fff">
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
          <Image style={styles.backIcon}/>
        </TouchableOpacity>
        <SearchBar navigation={navigation}/>
      </View>
    </SafeAreaView>
  )
}

export default PhoneHeader