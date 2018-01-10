import React from 'react';
import { Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Searchbar = (props) => {
    return (
        <Col>
            <Card>
                <CardBody>
                    <CardTitle>Search</CardTitle>
                    <input type="text"/>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Searchbar;