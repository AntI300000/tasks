import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

import img from "./assets/images/sailing_photo.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                {/* <br />By Anthony Imperiale */}
                <h2>By Anthony Imperiale</h2>
            </header>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
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
                    </Col>
                    <Col>
                        <p>Here is a photo of me out on the water</p>
                        <img
                            src={img}
                            alt="Me at sailing practice"
                            width="250"
                        />
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
        </div>
    );
}

export default App;
