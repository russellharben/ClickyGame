import React from 'react';
import './style.css';
import { Card } from "react-bootstrap";



function BoardItems(props) {
    
    return <div className="itemCard">
            <Card onClick={() => props.handleScore(props.key)} style={{ width: '16rem', cursor:'pointer' }}>
                <Card.Img data-id={props.key} variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
}

export default BoardItems;