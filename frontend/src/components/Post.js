import React from 'react';
import { Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import moment from "moment";
import Vote from "./Vote";

//template from http://reactstrap.github.io/components/card/
const Post = (props) => {
    return (
        <Col>
            <Card className="post">
                <CardBody>
                    <CardTitle className='post-title'>{props.title}</CardTitle>
                    <CardSubtitle>
                        <span className=' post-author'>Author: {props.author}</span>
                        <span className=' post-score float-right'>Score: {props.voteScore}</span>
                        <br/>
                    </CardSubtitle>
                    {/*vote section*/}
                    <Vote/>
                    <br/>

                    <CardText className='post-content'>{props.body}</CardText>
                    <hr/>
                    <Button className='post-comments float-left'>Comments ({props.commentCount})</Button>
                    <br/><br/>
                    <i>
                        <p>
                            <span className='post-category float-left'>
                                #{props.category}
                            </span>
                            <span className='post-dateCreated float-right'>
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