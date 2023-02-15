import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = ({onClose, navigation}) => {
  return (
    <VideoPlayer
      onBack={() => {
        onClose();
      }}
      onEnd={() => {
        onClose();
      }}
      fullscreenOrientation="all" //for iOS
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      navigator={navigation}
    />
  );
};

export default Video;
