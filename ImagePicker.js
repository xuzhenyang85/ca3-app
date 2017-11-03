import React from 'react';
import {Text, Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImagePickerEx extends React.Component {
  constructor(){
    super();
    this.state ={
      lat: null,
      lon: null,
      image: null,
    }
  }

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          <Text>lon - {this.state.lon}</Text>
          <Text>lat - {this.state.lat}</Text>
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      exif: true,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.setState({lon: result.exif.GPSLongitude})
      this.setState({lat: result.exif.GPSLatitude})
    }
  };
}
