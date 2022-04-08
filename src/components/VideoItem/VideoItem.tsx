import React from 'react';

import { VideoType } from '../../App';
import styles from './VideoItem.module.css';

interface VideoProps {
  video: VideoType;
  onVideoClick(video: VideoType): void;
  display: string;
}

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }: VideoProps) => {
  console.log(video)
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  )
};

export default VideoItem;
