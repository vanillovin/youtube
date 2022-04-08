import React, { useEffect, useState } from 'react';

import styles from './app.module.css';
import SearchHeader from './components/SearchHeader/SearchHeader';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';

type ThumnailsType = {
  url: string,
  width: number,
  height: number
}

export type VideoType = { 
  kind: string, 
  etag: string, 
  id: string,
  snippet: {
    categoryId: string,
    channelId: string,
    channelTitle: string,
    defaultAudioLanguage: string,
    description: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string
    },
    publishedAt: string,
    tags: string[],
    thumbnails: {
      default: ThumnailsType,
      high: ThumnailsType,
      medium: ThumnailsType,
    },
    title: string
  }
};

function App({ youtube }: any) {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const selectVideo = (video: any) => {
    setSelectedVideo(video);
  };

  const search = (query: string) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos: VideoType[]) => setVideos(videos));
  };
  
  const fetchPopularVideos = () => {
    youtube
      .mostPopular() //
      .then((videos: VideoType[]) => setVideos(videos));
  }

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  const onLogoClick = () => {
    setSelectedVideo(null);
    fetchPopularVideos();
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onLogoClick={onLogoClick} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
