import React from 'react';
import { Col, Card, CardBody,
    CardTitle } from 'reactstrap';

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