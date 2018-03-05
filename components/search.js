import React from 'react';
import axios from 'axios';
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
    let word = this.state.searchEntry;
    let key = '1545b079e732c69e8bcd3982db07818a';
    let id = '9e7d5728';
    axios.get(`https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${word}`, { headers: { app_id: id, app_key: key } })
    .then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
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