import React from 'react';
import { Button } from 'reactstrap';
import {
 Media 

} from 'reactstrap';
const PostView = (props) => {

  const { data } = props
  console.log("datane",data)
  return (
    <div >

      <Media style={{borderBottom:"1px solid  #303030"}}>
      <Media body>
        <Media heading style={{color: "#ffa7c4"}}>
        <h2 style={{fontSize:"1em",color:"#f056c7"}}>{data.title}</h2>

        </Media>
        <br/>
        <h6 style={{color: "#58e6d9"}}>{data.create_date}</h6> 
        
        <p style={{fontFamily:"'Inconsolata', monospace",color:"#ffffff"}}>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <br/>
        <Button outline color="secondary" style={{borderColor:"#a47ae1"}}>Xem thêm</Button>
        <br/>
        <br/>
      </Media>
    </Media>
    </div>
  );
};


export default PostView;