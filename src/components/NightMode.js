import React from 'react';

import StyledNightMode from './styles/StyledNightMode';


const NightMode = ({ nightMode, toggleNightMode }) =>
  <StyledNightMode>
    <span>Night mode:</span>
    <label className="switch">
      <input type="checkbox" checked={nightMode} onChange={toggleNightMode} />
      <span className="slider round"></span>
    </label>
  </StyledNightMode>
;


export default NightMode;
