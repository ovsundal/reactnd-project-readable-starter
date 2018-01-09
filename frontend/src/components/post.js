import React from 'react';
import { Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

//template from http://reactstrap.github.io/components/card/
const Post = (props) => {
    return (
        <Col sm="6">
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Post title</CardTitle>
                    <CardSubtitle>Post subtitle</CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet, nihil labitur blandit in per, porro forensibus pro an.
                        Eum in doctus nonumes nominavi. Ut suas dicant appellantur eos, autem doctus vix et, duo et
                        integre feugiat impedit. In pri dicam verterem, modus blandit repudiandae pro te, nec ut sale
                        persecuti. Saperet fabellas eloquentiam ex pro, nec iisque sadipscing eu, nibh postea cum te.
                    </CardText>
                    <Button>Read more</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Post;