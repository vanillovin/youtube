import React from 'react';

const VideoItem = ({ video }: any) => {
  return (
    <h1>{video.snippet.title}</h1>
  )
};

export default VideoItem;
