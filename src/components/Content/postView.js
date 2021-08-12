import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
const PostView = () => {
    return (
        <div>
      <Card>
        <CardImg top width="100%" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/12A57/production/_109657367_a267a209-f3a5-4a8c-bf2b-5c80660d4fe0.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    );
};

export default PostView;