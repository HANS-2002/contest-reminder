import React from 'react';

function RenderContest(props) {

    const [countDown, setCountDown] = React.useState(new Date(props.start) - new Date());
    setInterval(() => { setCountDown(new Date(props.start) - new Date()) }, 1000);

    function fixTime(time) {
        if (time < 10) {
            return "0" + time;
        }
        return time;
    }

    function validateContest(time) {
        console.log();
        if (countDown > 0 && (new Date(new Date().setMonth(new Date().getMonth() + 1))) >= new Date(time))
            return true;
        return false;
    }

    function convertMilli() {
        let hours = Math.floor(countDown / 3600000);
        let minutes = Math.floor((countDown - hours * 3600000) / 60000);
        let seconds = Math.floor((countDown - hours * 3600000 - minutes * 60000) / 1000);
        let timeString = fixTime(hours) + " : " + fixTime(minutes) + " : " + fixTime(seconds);
        return timeString;
    }

    return (
        <>
            {validateContest(props.start) ?
                <div className='box'>
                    <div className='contestName'>
                        <a href={props.url} target="_blank">{props.name}</a>
                    </div>
                    <div className='contestTime'>
                        <div className='label'>
                            Start:
                        </div>
                        <div className='timeValue'>
                            <p>{fixTime(new Date(props.start).getHours())} : {fixTime(new Date(props.start).getMinutes())}</p>
                            <p>{fixTime(new Date(props.start).getDate())} - {fixTime(new Date(props.start).getMonth() + 1)} - {new Date(props.start).getFullYear()}</p>
                        </div>
                    </div>
                    <div className='contestTime'>
                        <div className='label'>
                            End:
                        </div>
                        <div className='timeValue'>
                            <p>{fixTime(new Date(props.end).getHours())} : {fixTime(new Date(props.end).getMinutes())}</p>
                            <p>{fixTime(new Date(props.end).getDate())} - {fixTime(new Date(props.end).getMonth() + 1)} - {new Date(props.end).getFullYear()}</p>
                        </div>
                    </div>
                    <div className='contestTime'>
                        <div className='label'>
                            Time to Start:
                        </div>
                        <div className='timeValue'>
                            <p>{convertMilli()}</p>
                        </div>
                    </div>
                </div>
                : null}

        </>
    );
}

export default RenderContest;
