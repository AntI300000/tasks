import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    function flipVisability(): void {
        setShowAnswer(!showAnswer);
    }

    return (
        <span>
            <Button
                onClick={() => {
                    flipVisability();
                }}
            >
                Reveal Answer
            </Button>
            {showAnswer && 42}
        </span>
    );
}
