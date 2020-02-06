import React from 'react';

import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist';


const Playlist = ({ videos, active, nightMode, toggleNightMode }) =>
  <StyledPlaylist>
    <NightMode nightMode={nightMode} toggleNightMode={toggleNightMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
;


export default Playlist;
