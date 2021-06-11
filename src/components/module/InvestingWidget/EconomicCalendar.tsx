import React from 'react';

const EconomicCalendar = (): React.ReactElement => {
    return (
        <div>
            <iframe src={`https://sslecal2.forexprostools.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=day&timeZone=88&lang=18`}
                width="650"
                height="467"
                frameBorder="0"
                allowTransparency={true}
                marginWidth={0}
                marginHeight={0} >
            </iframe >
            <div className="poweredBy" style={{ fontFamily: "Arial, Helvetica, sans-serif;" }}>
                <span style={{ fontSize: "11px", color: "#333333", textDecoration: "none" }}>
                    Real Time Economic Calendar provided by
                    <a href="https://www.investing.com/" rel="nofollow" target="_blank" style={{ fontSize: "11px", color: "#06529D", fontWeight: "bold" }} className="underline_link">Investing.com</a>
                </span>
            </div>
        </div >
    )
}

export default EconomicCalendar;