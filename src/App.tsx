import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Container, Row, Col } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

import img from "./assets/images/sailing_photo.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                {/* <br />By Anthony Imperiale */}
                <h2>By Anthony Imperiale</h2>
            </header>
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100",
                                height: "15",
                            }}
                        >
                            <br />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Some of my hobbies</p>
                        <ul>
                            <li>Playing games</li>
                            <li>Model Painting</li>
                            <li>Sailing</li>
                        </ul>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100",
                                height: "15",
                            }}
                        >
                            <br />
                        </div>
                    </Col>
                    <Col>
                        <p>Here is a photo of me out on the water</p>
                        <img
                            src={img}
                            alt="Me at sailing practice"
                            width="250"
                        />
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100",
                                height: "15",
                            }}
                        >
                            <br />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </div>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
