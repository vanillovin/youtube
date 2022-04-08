import React, { useEffect, useState } from 'react';

import styles from './app.module.css';
import SearchHeader from './components/SearchHeader/SearchHeader';
import VideoList from './components/VideoList/VideoList';

type ThumnailsType = {
  url: string,
  width: number,
  height: number
}

export type SnippetType = {
  categoryId: string,
  channelId: string,
  channelTitle: string,
  defaultAudioLanguage: string,
  description: string,
  liveBroadcastContent: string,
  localized: { title: string, description: string },
  publishedAt: string,
  tags: string[],
  thumbnails: {
    default: ThumnailsType,
    high: ThumnailsType,
    medium: ThumnailsType,
  },
  title: string
}

export type VideosType = { 
  kind: string, 
  etag: string, 
  id: string,
  snippet: SnippetType
};

function App({ youtube }: any) {
  const [videos, setVideos] = useState<VideosType[]>([]);
  const search = (query: string) => {
    youtube
      .search(query) //
      .then((videos: VideosType[]) => setVideos(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos: VideosType[]) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
