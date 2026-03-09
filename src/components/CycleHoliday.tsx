import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Years Day"
    | "Valentine's Day"
    | "Halloween"
    | "Thanksgiving Day"
    | "Christmas Day";
//              1/1                 2/14                10/31         11/26                 12/25

const dateOrder: Map<Holiday, Holiday> = new Map([
    ["New Years Day", "Valentine's Day"],
    ["Valentine's Day", "Halloween"],
    ["Halloween", "Thanksgiving Day"],
    ["Thanksgiving Day", "Christmas Day"],
    ["Christmas Day", "New Years Day"],
]);

const alphabeticalOrder: map<Holiday, Holiday> = new Map([
    ["Christmas Day", "Halloween"],
    ["Halloween", "Thanksgiving Day"],
    ["Thanksgiving Day", "Valentine's Day"],
    ["Valentine's Day", "New Years Day"],
    ["New Years Day", "Christmas Day"],
]);

const emojiMap: map<Holiday, string> = new Map([
    ["New Years Day", "🎆"],
    ["Valentine's Day", "❤️"],
    ["Halloween", "🎃"],
    ["Thanksgiving Day", "🦃"],
    ["Christmas Day", "🎄"],
]);

export function CycleHoliday(): React.JSX.Element {
    return <div>Cycle Holiday</div>;
}
