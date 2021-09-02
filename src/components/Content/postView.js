import React from 'react';
import {
  Card, Media , CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const PostView = (props) => {
  const { data } = props
  console.log("datane",data)
  return (
    <div>
      {/* <Card style={{ height: '100px' }}>
        <CardBody>
          <CardTitle tag="h5">{data.title} </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {data.create_date}{' '}
          {data.tag.map(dt => (
              <Button color="secondary" size="sm">{dt}</Button>

          ))}
            
          </CardSubtitle>
          
        </CardBody>
      </Card> */}
      <Media>
      <Media body>
        <Media heading>
        <h2>{data.title}</h2>
        <br/>
        <h6>{data.create_date}</h6> 
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    </div>
  );
};

export default PostView;