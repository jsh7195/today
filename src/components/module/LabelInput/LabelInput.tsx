import React from 'react';
interface Props {
  loading?: boolean;
  readOnly?: boolean;
  id: string;
  label: string;
  value: string;
  setData: any;
}

const LabelInput = ({
  loading = false,
  label,
  value,
  id,
  setData,
}: Props): React.ReactElement => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        style={{ color : 'black'}}
        type="text"
        key={id}
        name={id}
        id={id}
        value={value}
        defaultValue="0"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
};

export default LabelInput;
