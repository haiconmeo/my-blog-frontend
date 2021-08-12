import React from 'react';
import {
    CardBody,
    CardTitle,
  } from "reactstrap";
const PostPage = () => {
    return (
        <div>
            <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
        </div>
    );
};

export default PostPage;