import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numOfAttempts, setNumOfAttempts] = useState<number>(4);
    const [inProgress, setInPogress] = useState<boolean>(false);

    function changeNumOfAttempts(changeBy: number): void {
        setNumOfAttempts(numOfAttempts + changeBy);
    }

    function startTest(): void {
        changeNumOfAttempts(-1);
        setInPogress(true);
    }

    function stopTest(): void {
        setInPogress(false);
    }

    return (
        <span>
            <Button
                onClick={() => {
                    startTest();
                }}
                disabled={inProgress || numOfAttempts <= 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    stopTest();
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    changeNumOfAttempts(1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <p>You have {numOfAttempts} left</p>
        </span>
    );
}
