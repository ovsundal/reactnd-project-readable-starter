import React from 'react';
import { Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import moment from "moment";

//template from http://reactstrap.github.io/components/card/
const Post = (props) => {
    return (
        <Col>
            <Card className="post">
                <CardBody>
                    <CardTitle className='post-title'>{props.title}</CardTitle>
                    <CardSubtitle className='post-author'>Author: {props.author}</CardSubtitle>
                    <hr/>
                    <CardText className='post-content'>{props.body}
                    </CardText>
                    <hr/>
                    <Button>Comments</Button>
                    <i>
                        <p className='post-topic'>
                            <span className='float-left'>
                                #{props.category}
                            </span>
                            <span className='float-right'>
                                Created: {moment(props.timestamp).format("DD-MM-YYYY HH:mm:ss")}
                            </span>
                        </p>
                    </i>
                </CardBody>
            </Card>
        </Col>
    );
};
export default Post;