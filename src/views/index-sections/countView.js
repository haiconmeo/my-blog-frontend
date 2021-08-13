import React from 'react';
import {  Card ,CardTitle, CardBody, CardSubtitle,CardText} from 'reactstrap';
const CountView = () => {
    return (
      
       <Card >
           <CardBody>
          <CardTitle tag="h5">Số bài đăng: 1000 </CardTitle>
          <CardTitle tag="h5">Lượt truy cập: 1 </CardTitle>
          <CardTitle tag="h5">Giá vàng: 10000 </CardTitle>
        </CardBody>
      </Card>
    );
};

export default CountView;