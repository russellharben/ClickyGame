import React from 'react';
import './style.css';
import { Card } from "react-bootstrap";



function BoardItems(props) {


    return <div className="itemCard">
            <Card onClick={props.score} style={{ width: '16rem', cursor:'pointer' }}>
                <Card.Img tar={props.key} variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
}

export default BoardItems;