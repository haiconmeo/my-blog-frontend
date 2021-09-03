import React,{useState} from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import {
 Media 

} from 'reactstrap';
import style from '../../assets/css/markdown-styles.module.css';


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
        {/* {data.tag.map(dt => (
              // <Link to={`/docs/${dt.docs}`}>
                <PostView data={dt} />
                // </Link>

            ))} */}
        {data.tag.map(dt => (
          
          <a  onClick={() => {window.location.href=`/tag/${dt}`}} className={style.button}> {dt} </a>
          
          ))}

        <p style={{fontFamily:"'Inconsolata', monospace",color:"#ffffff"}}>{data.introduction}</p>
        <br/>
        <Link to={`/docs/${data.docs}`}>
        <Button outline color="secondary"  style={{borderColor:"#a47ae1"}}>Xem thêm &gt;&gt;</Button>
        </Link>
        <br/>
        <br/>
      </Media>
    </Media>
    </div>
  );
};


export default PostView;