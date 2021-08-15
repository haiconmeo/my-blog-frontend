import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const PostView = () => {
  return (
    <div>
      <Card style={{ height: '100px' }}>
        <CardBody>
          <CardTitle tag="h5">Tên bài </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Ngày giời|tag|categori</CardSubtitle>
          <CardText>Some quick example </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostView;