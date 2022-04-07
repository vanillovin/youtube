import React from 'react';

import { VideosType } from '../../App';
import VideoItem from '../VideoItem/VideoItem';
import styles from './VideoList.module.css';

interface VideosProps {
  videos: VideosType[]
}

const VideoList = ({ videos }: VideosProps) => {
  return (
    <ul className={styles.videos}>
      {videos.map(video => (
        <VideoItem key={video.id} snippet={video.snippet} />
      ))}
    </ul>
  )
};

export default VideoList;
