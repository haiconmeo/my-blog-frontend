import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import IndexNavbar from "../Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Row, Col } from 'reactstrap';
import axios from "axios";
import gfm from 'remark-gfm'
import CodeBlock from "./code-block"
import style from '../../assets/css/markdown-styles.module.css';
const PostDetails = (props) => {
    const [post, setpost] = useState([]);
    console.log("id",props.match.params.id)
    const get_data = async () => {
        let callAPI = "https://haiconmeo.site/"+props.match.params.id
        console.log(callAPI)
        try {
          const data = await axios.get(
            callAPI
          );
          console.log(data.data.document)
          setpost(data.data.document);
    
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        get_data()
    
      }, []);

    
    return (
        <div >
            <IndexNavbar />

            <div className="section"  style={{backgroundColor:"#131127"}} >
            <Row>
            <Col md="2">
            </Col>
            <Col md="7">
            <ReactMarkdown  className={style.reactMarkDown} children={post} renderers={{
        code: CodeBlock,
      }}  remarkPlugins={[gfm]} />
            </Col>
            </Row>
            
            </div>
            <DemoFooter />
        </div>
    );

    }
    export default PostDetails;


