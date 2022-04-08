import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Youtube from './service/youtube';

// index.js가 호출될 때 딱 한 번만 만들어서 필요한 곳에 전달
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY as string);

ReactDOM.render(
  <App youtube={youtube} />,
  document.getElementById('root')
);
