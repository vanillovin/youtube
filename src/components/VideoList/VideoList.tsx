import React from 'react';

import { VideoType } from '../../App';
import VideoItem from '../VideoItem/VideoItem';
import styles from './VideoList.module.css';

interface VideoListProps {
  videos: VideoType[];
  onVideoClick(video: VideoType): void;
  display: string;
}

const VideoList = ({ videos, onVideoClick, display }: VideoListProps) => {
  return (
    <ul className={styles.videos}>
      {videos.map(video => (
        <VideoItem 
          key={video.id} 
          video={video} 
          onVideoClick={onVideoClick} 
          display={display}
        />
      ))}
    </ul>
  )
};

export default VideoList;
