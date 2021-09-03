import React from 'react';
import { Link } from "react-router-dom";
import {
 Media 

} from 'reactstrap';
const PostNew = (props) => {
  const { data } = props
  console.log("datane",data)

  return (
    <div >

      <Media style={{borderBottom:"1px solid  #303030"}}>
      <Media body>
        <Media heading style={{color: "#ffa7c4"}}>
        <h2 style={{fontSize:"1em",fontFamily:"'Inconsolata', monospace",color:"#f056c7"}}>{data.title}</h2>
        </Media>
        <Link to={`/docs/${data.docs}`}>
            <br/>
        <a outline color="secondary"  style={{borderColor:"#a47ae1",fontFamily:"'Inconsolata', monospace",fontSize: "12px",color:"#ffffff"}}>Xem thêm &gt;&gt;</a>
        </Link>
        <br/>
        <br/>
      </Media>
    </Media>
    </div>
  );
};


export default PostNew;