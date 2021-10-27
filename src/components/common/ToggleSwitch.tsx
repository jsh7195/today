import React from 'react';
import './ToggleSwitch.css';

interface Props {
  label: string;
  complete: boolean;
}

const ToggleSwitch = ({ label, complete }: Props): React.ReactElement => {
  return (
    <div className='container'>
      <div className='toggle-switch'>
        <input type='checkbox' className='checkbox' checked={complete} name={label} id={label} />
        <label className='label' htmlFor={label}>
          <span className='inner' />
          <span className='switch' />
        </label>
      </div>
    </div>
  );
}

export default ToggleSwitch;