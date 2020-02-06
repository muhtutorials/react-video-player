import React from 'react';
import ReactPlayer from 'react-player';

import StyledVideoWrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StyledVideo';


const Video = ({ url, autoplay, endCallback, progressCallback }) =>
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0" }}
        playing={autoplay}
        controls={true}
        url={url}
        onEnded={endCallback}
        onProgress={progressCallback}
      />
    </StyledVideoWrapper>
  </StyledVideo>
;


export default Video;