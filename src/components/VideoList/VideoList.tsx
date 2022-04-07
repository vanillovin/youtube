import React from 'react';

import { VideosType } from '../../App';
import VideoItem from '../VideoItem/VideoItem';

interface VideosProps {
  videos: VideosType[]
}

const VideoList = ({ videos }: VideosProps) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
        ))}
    </ul>
  )
};

export default VideoList;
