import React from 'react';
import './ToggleSwitch.css';

interface Props {
  id: string;
}

const ToggleSwitch = ({ id }: Props): React.ReactElement => {
  return (
    <div>
      <input className="tgl tgl-flip" id="cb5" type="checkbox"/>
      <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor="cb5"></label>
    </div>
  );
}

export default ToggleSwitch;