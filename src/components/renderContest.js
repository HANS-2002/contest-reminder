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

    return (
        <>
            {countDown > 0 ?
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
                            <p>{fixTime((new Date(countDown).getDate() - 1) * 24 + new Date(countDown).getHours())} : {fixTime(new Date(countDown).getMinutes())} : {fixTime(new Date(countDown).getSeconds())}</p>
                        </div>
                    </div>
                </div>
                : null}

        </>
    );
}

export default RenderContest;
