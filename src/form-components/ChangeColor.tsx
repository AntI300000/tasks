import React, { useState } from "react";
import { Form } from "react-bootstrap";

//type ColorValue = CSSProperties["color"];

type Color =
    | "Red"
    | "Orange"
    | "Yellow"
    | "Green"
    | "Blue"
    | "Indigo"
    | "Violet"
    | "Brown";

/*
Made this whole cool thing but Can't use it the way the tests are writen.
const colorToHex: Map<Color, ColorValue> = new Map([
    ["Red", "#ff0000"], //1
    ["Orange", "#ffa500"], //2
    ["Yellow", "#ffff00"], //3
    ["Green", "#008000"], //4
    ["Blue", "#0000ff"], //5
    ["Indigo", "#4b0082"], //6
    ["Violet", "#ee82ee"], //7
    ["Brown", "#8b4513"], //8 ALSO WHY IS THE KEYWORD FOR BROWN SO BADDDD
]);
**/

function ColorButton({
    color,
    setColor,
    buttonColor,
}: {
    color: Color;
    setColor: (n: Color) => void;
    buttonColor: Color;
}): React.JSX.Element {
    return (
        <Form.Check
            inline
            type="radio"
            name="colors"
            onChange={() => {
                setColor(buttonColor);
            }}
            id="emotion-check-happy"
            label={buttonColor}
            value={buttonColor}
            checked={color === buttonColor}
        />
    );
}
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<Color>("Red");

    return (
        <div>
            <h3>Change Color</h3>
            <ColorButton color={color} setColor={setColor} buttonColor="Red" />
            <ColorButton
                color={color}
                setColor={setColor}
                buttonColor="Orange"
            />
            <ColorButton
                color={color}
                setColor={setColor}
                buttonColor="Yellow"
            />
            <ColorButton
                color={color}
                setColor={setColor}
                buttonColor="Green"
            />
            <ColorButton color={color} setColor={setColor} buttonColor="Blue" />
            <ColorButton
                color={color}
                setColor={setColor}
                buttonColor="Indigo"
            />
            <ColorButton
                color={color}
                setColor={setColor}
                buttonColor="Violet"
            />
            <ColorButton
                color={color}
                setColor={setColor}
                buttonColor="Brown"
            />
            <p>
                {"You have chosen "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </p>
        </div>
    );
}
