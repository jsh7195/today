import React from 'react';
interface Props {
    loading?: boolean;
    readOnly?: boolean
    label: string;
    value: string;
}

const LabelInput = ({
    loading = false,
    readOnly,
    label,
    value
}: Props): React.ReactElement => {
    return (
        <div>
            <label htmlFor={label}>
                {label}
            </label>
            <input type="text" id={label} value={value} readOnly={readOnly}
            />
        </div>
    )
}

export default LabelInput;