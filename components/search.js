import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      searchEntry: '',
      searchResults: []
    }
  }

  callAPIForWord(){
    console.log(this.state.searchEntry)
  }


  render(){
    return(
      <View style={styles.container}>
        <Text>Search for a word here</Text>
        <TextInput
          value={this.state.searchEntry}
          onChangeText={searchEntry => this.setState({searchEntry: searchEntry})}
          onSubmitEditing={this.callAPIForWord.bind(this)}
          returnKeyType='search'
        />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});