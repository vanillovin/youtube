import React, { useEffect, useState } from 'react';

import VideoList from './components/VideoList/VideoList';

export type VideosType = { 
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
    localized: { title: string, description: string },
    publishedAt: string,
    tags: string[],
    thumbnails: object[],
    title: string
  }
};

function App() {
  const [videos, setVideos] = useState<VideosType[]>([]);

  useEffect(() => {
    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0',
      {
        method: 'GET',
        redirect: 'follow',
      }
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
