import React from 'react';

const CurrencyConvert = (): React.ReactElement => {
    return (
        <div>
            <iframe src={`https://ssltools.forexprostools.com/currency-converter/index.php?from=28&to=12&force_lang=1`}
                width="230"
                height="467"
                frameBorder="0"
                allowTransparency={true}
                marginWidth={0}
                marginHeight={0} >
            </iframe >
        </div >
    )
}

export default CurrencyConvert;