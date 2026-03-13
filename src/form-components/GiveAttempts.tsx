import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function NumbBox({
    requestedAttempts,
    setRequestedAttempts,
}: {
    requestedAttempts: string;
    setRequestedAttempts: (n: string) => void;
}) {
    return (
        <div>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
        </div>
    );
}

function UseButton({
    currAttempts,
    setCurrAttempts,
    children,
}: {
    currAttempts: number;
    setCurrAttempts: (n: number) => void;
    children?: React.ReactNode;
}): React.JSX.Element {
    return (
        <span>
            {children}
            <Button
                onClick={() => {
                    if (currAttempts > 0) {
                        setCurrAttempts(currAttempts--);
                    }
                }}
            >
                Use
            </Button>
        </span>
    );
}

function GainButton({
    requestedAttempts,
    currAttempts,
    setCurrAttempts,
}: {
    requestedAttempts: string;
    currAttempts: number;
    setCurrAttempts: (n: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setCurrAttempts(parseInt(requestedAttempts) + currAttempts);
            }}
        >
            Gain
        </Button>
    );
}

export function GiveAttempts(): React.JSX.Element {
    const [currAttempts, setCurrAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("0");

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>You have {currAttempts} left</span>
            <NumbBox
                requestedAttempts={requestedAttempts}
                setRequestedAttempts={setRequestedAttempts}
            />
            <UseButton
                currAttempts={currAttempts}
                setCurrAttempts={setCurrAttempts}
            >
                use
            </UseButton>
        </div>
    );
}
