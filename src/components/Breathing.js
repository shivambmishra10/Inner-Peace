import React, {useState} from "react";
import './Breathing.css';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import {useMediaQuery} from 'react-responsive';
import Header from "./Header";


const renderTime1 = ({remainingTime}) => {
    if (remainingTime === 0) {
        return;
    }

    return (
        <div className="timer">
            <div className="text">Breathe IN for 4 seconds</div>
            <div className="value">{remainingTime}</div>
        </div>
    );
};

const renderTime2 = ({remainingTime}) => {
    if (remainingTime === 0) {
        return;
    }

    return (
        <div className="timer">
            <div className="text">HOLD breath for 8 seconds</div>
            <div className="value">{remainingTime}</div>
        </div>
    );
};

const renderTime3 = ({remainingTime}) => {
    if (remainingTime === 0) {
        return;
    }

    return (
        <div className="timer">
            <div className="text">Breathe OUT for 7 seconds</div>
            <div className="value">{remainingTime}</div>
        </div>
    );
};


const Breathing = (props) => {

    const isTabletOrMobile = useMediaQuery({query: '(min-width: 1700px)'})
    const isTabletOrMobile2 = useMediaQuery({query: '(max-width: 520px)'})
    const isTabletOrMobile3 = useMediaQuery({query: '(max-width: 444px)'})


    const [inMotion, setInMotion] = useState(false);
    const [inMotion2, setInMotion2] = useState(false);
    const [inMotion3, setInMotion3] = useState(false);

    const [hideTimer1, setHideTimer1] = useState(true);
    const [hideTimer2, setHideTimer2] = useState(false);
    const [hideTimer3, setHideTimer3] = useState(false);

    const [, setScaleTimer1] = useState(true);
    const [, setScaleTimer3] = useState(true);

    const restartExercise = () => {
        window.location.reload();
    }

    const displayTimers = (timer) => {
        switch (timer) {
            case 1:
                setInMotion2(true);
                setScaleTimer1(false);
                setHideTimer1(false);
                setHideTimer2(true);
                setHideTimer3(false);
                return;
            case 2:
                setInMotion3(true);
                setHideTimer1(false);
                setHideTimer2(false);
                setHideTimer3(true);
                return;
            case 3:
                setInMotion3(false);
                setHideTimer1(false);
                setHideTimer2(false);
                setHideTimer3(false);
                setScaleTimer3(false);
                return;
            default:
                return;
        }
    }


    return (
        <>
            <Header/>
            <div className="breathing">
                <div className="text-breathing">
                    <div className="info1">
                        <p>Breathing exercise</p>
                        <p>4-8-7 technique</p>
                    </div>
                    <div className="info2">
                        <p>Great help when experiencing anxiety</p>
                        <p><u><em>Breathe in</em></u> for <u><em>4</em></u> seconds</p>
                        <p><u><em>Hold your breath</em></u> for <u><em>8</em></u> seconds</p>
                        <p>then <u><em>breathe out</em></u> for <u><em>7</em></u> seconds</p>
                    </div>
                    < div className="info3">
                        Reduces anxiety and helps to get to sleep
                    </div>
                    <input className="start-breathing" type="submit" value="Start" onClick={() => setInMotion(true)}/>
                    <input className="restart" type="submit" value="Restart" onClick={restartExercise}/>
                </div>
                <div className="circles">
                    <div className="breath-in" style={{opacity: hideTimer1 ? 1 : 0}}>
                        <CountdownCircleTimer
                            isPlaying={inMotion}
                            duration={4}
                            strokeWidth={25}
                            size={isTabletOrMobile ? 600 : isTabletOrMobile2 ? 300 : isTabletOrMobile3 ? 150 : 450}
                            colors={[
                                ['#004777', 0.33],
                                ['#006aff', 0.33],
                                ['#5ea1ff', 0.33],
                            ]}
                            onComplete={() => displayTimers(1)}
                        >
                            {renderTime1}
                        </CountdownCircleTimer>
                    </div>
                    <div className="hold-breath" style={{opacity: hideTimer2 ? 1 : 0}}>
                        <CountdownCircleTimer
                            isPlaying={inMotion2}
                            duration={8}
                            size={isTabletOrMobile ? 600 : isTabletOrMobile2 ? 300 : isTabletOrMobile3 ? 150 : 450}
                            strokeWidth={25}
                            colors={[
                                ['#004777', 0.33],
                                ['#006aff', 0.33],
                                ['#5ea1ff', 0.33],
                            ]}
                            onComplete={() => displayTimers(2)}
                        >
                            {renderTime2}
                        </CountdownCircleTimer>
                    </div>
                    <div className="breath-out" style={{opacity: hideTimer3 ? 1 : 0}}>
                        <CountdownCircleTimer
                            isPlaying={inMotion3}
                            duration={7}
                            size={isTabletOrMobile ? 600 : isTabletOrMobile2 ? 300 : isTabletOrMobile3 ? 150 : 450}
                            strokeWidth={25}
                            colors={[
                                ['#004777', 0.33],
                                ['#006aff', 0.33],
                                ['#5ea1ff', 0.33],
                            ]}
                            onComplete={() => displayTimers(3)}
                        >
                            {renderTime3}
                        </CountdownCircleTimer>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Breathing;
