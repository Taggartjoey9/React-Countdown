import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TimerChallenge({ title, targetTime }) {

    const [timerExpired, setTimeExperied] = useState(false);

        function handleStart() {
            setTimeout(() => {setTimeExperied(true)}, targetTime * 1000);
        }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    Start Challenge
                </button>
            </p>
            <p className="">
                Time is running... / Timer Inactive
            </p>
        </section>
    )
}