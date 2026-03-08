import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numOfAttempts, setNumOfAttempts] = useState<number>(4);
    const [inProgress, setInPogress] = useState<boolean>(false);

    function changeInProgress(): void {
        setInPogress(!inProgress);
    }

    function changeNumOfAttempts(changeBy: number): void {
        setNumOfAttempts(numOfAttempts + changeBy);
    }

    return (
        <span>
            <Button
                onClick={() => {
                    changeInProgress();
                }}
                disabled={inProgress}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    changeInProgress();
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
