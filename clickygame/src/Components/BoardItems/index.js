import React from 'react';
import './style.css';
import { Card } from "react-bootstrap";



function BoardItems(props) {

    return <div className="itemCard">
            <Card displayScore={props.stateScore} onClick={props.score} style={{ width: '16rem', cursor:'pointer' }}>
                <Card.Img st={props.state} variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
}

export default BoardItems;
