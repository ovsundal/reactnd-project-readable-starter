import React from 'react';
import {Card, CardBody} from 'reactstrap';

function PageNotFound() {

    return (
        <Card>
            <CardBody>
               <h2>404 - Page not found</h2>
                <h4>Post may have been deleted</h4>
            </CardBody>
        </Card>
    );
}

export default PageNotFound;