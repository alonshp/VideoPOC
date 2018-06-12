import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Video from 'react-native-video'

const gongApiBaseUrl = 'https://front-end-api.gong.io/'
const sampleVideoUrl = '/v1/stream?token=eyJhbGciOiJIUzI1NiJ9.eyJzcmMiOiJjYWxsLXJlY29yZGluZ3NcLzExMzU0NzE1NTM2MTkwMjY0NTNcLzExMzU0NzE1NTM2MTkwMjY0NTMucGxheWJhY2subXA0IiwicmVwb3NpdG9yeSI6IkFXU1BST0QiLCJleHAiOjE1Mjg5NDg4MDB9.xypmOfojCJSQFF_6mEk6xtASwdiho8CJ4qUCWM0-vjk'

type Props = {};
export default class App extends Component<Props> {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: false,
    skin: 'custom',
    ignoreSilentSwitch: null,
    isBuffering: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => {
            this.setState({paused: !this.state.paused})
          }}>
          <Video
            source={{ uri: gongApiBaseUrl + sampleVideoUrl, type: 'mp4' }}
            style={{flex: 1}}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            repeat={false}
          />
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
