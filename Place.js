import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
export default class Place extends Component {
  constructor (){
    super();
    this.state={ data:[] };
    this.get = this.get.bind(this);
    this.renderData = this.renderData.bind(this);
  }

  componentDidMount (){
    this.get();
  }

    render() {
        return (
            <View style={styles.container}>
                { this.renderData() }
            </View>
        );
    }
get() {
        fetch('https://xudk.me/backend/ca3/api/all/places', {
            method: 'GET',
            headers: {
             'Content-Type': 'application/json'
         }
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({data});
        })
        .catch((err) => {//2
            console.error(err);
        });
    }
    renderData(){
      const rows = this.state.data.map((d) => {
        return (
          <Text>
          {d.id}
          {d.zip}
          {d.street}
          {d.image}
          </Text>
        )
      });
      return (<View>
        {rows}
      </View>)
    }
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
});
AppRegistry.registerComponent('FetchSample', () => Fetch);
