import React from 'react';

import { VideoType } from '../../App';
import styles from './VideoDetail.module.css';

function getDay(publishedAt: string){
  const date = new Date(publishedAt);
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}.${month}.${day}`;
}

const VideoDetail = ({ video, video: { snippet } }: { video: VideoType }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      typeof="text/html"
      frameBorder="0"
      allowFullScreen
    />
    <h2 className={styles.title}>{snippet.title}</h2>
    <h3 className={styles.info}>조회수 4,321회 · {getDay(snippet.publishedAt)}</h3>
    <hr style={{ borderTop: 0 }} />
    <h3 className={styles.ctitle}>{snippet.channelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail