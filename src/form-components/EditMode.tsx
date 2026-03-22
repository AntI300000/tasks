import React, { useState } from "react";
import { Form } from "react-bootstrap";

function EditModeSwitch({
    editMode,
    setEditMode,
}: {
    editMode: boolean;
    setEditMode: (n: boolean) => void;
}): React.JSX.Element {
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <span>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit mode:"
                checked={editMode}
                onChange={updateEditMode}
                //reverse
            />
        </span>
    );
}

function StudentStatusCheckbox({
    isStudent,
    setStudentStatus,
}: {
    isStudent: boolean;
    setStudentStatus: (n: boolean) => void;
}): React.JSX.Element {
    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentStatus(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="checkbox"
                id="student-checkbox"
                label="Are you a Student?"
                checked={isStudent}
                onChange={updateStudentStatus}
                //reverse
            />
        </div>
    );
}

function EditBox({
    name,
    setName,
}: {
    name: string;
    setName: (n: string) => void;
}): React.JSX.Element {
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <span>
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
        </span>
    );
}

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudentStatus] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    return (
        <div className="text-center">
            <h3>Edit Mode</h3>
            {!editMode && isStudent && <p>{name} is a student</p>}
            {!editMode && !isStudent && <p>{name} is not a student</p>}
            {editMode && (
                <div className="d-flex justify-content-center">
                    <StudentStatusCheckbox
                        isStudent={isStudent}
                        setStudentStatus={setStudentStatus}
                    />
                    <EditBox name={name} setName={setName} />
                </div>
            )}
            <div className="d-flex justify-content-center">
                <EditModeSwitch editMode={editMode} setEditMode={setEditMode} />
            </div>
        </div>
    );
}
