import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

//type QuestionType = "multiple_choice_question" | "short_answer_question";

export function ChangeType(): React.JSX.Element {
    const [qType, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        if (qType === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button
                onClick={() => {
                    changeType();
                }}
            >
                Change Type
            </Button>
            {qType === "short_answer_question" && <span>Short Answer</span>}
            {qType === "multiple_choice_question" && (
                <span>Multiple Choice</span>
            )}
        </span>
    );
}
