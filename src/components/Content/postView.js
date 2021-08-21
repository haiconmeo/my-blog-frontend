import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const PostView = (props) => {
  const { data } = props
  console.log("datane",data)
  return (
    <div>
      <Card style={{ height: '100px' }}>
        <CardBody>
          <CardTitle tag="h5">{data.title} </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
          {data.tag.map(dt => (
              <Button color="secondary" size="sm">{dt}</Button>
          ))}
            
          </CardSubtitle>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default PostView;