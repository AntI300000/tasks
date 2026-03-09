import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceRightValue, setRightValue] = useState<number>(2);
    const [diceLeftValue, setLeftValue] = useState<number>(4);

    function rollRight(): void {
        setRightValue(d6());
    }

    function rollLeft(): void {
        setLeftValue(d6());
    }

    return (
        <span>
            <Button
                onClick={() => {
                    rollRight();
                }}
            >
                Roll Right
            </Button>
            <Button
                onClick={() => {
                    rollLeft();
                }}
            >
                Roll Left
            </Button>
            <br></br>
            <span data-testid="right-die">Right value:{diceRightValue}</span>
            <span> | </span>
            <span data-testid="left-die">Left Value:{diceLeftValue}</span>
            <br></br>
            {diceRightValue === 1 && diceLeftValue === 1 && <p>Lose</p>}
            {diceRightValue === diceLeftValue && diceLeftValue !== 1 && (
                <p>Win</p>
            )}
        </span>
    );
}
