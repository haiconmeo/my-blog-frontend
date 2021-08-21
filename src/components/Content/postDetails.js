import React, { useEffect, useState, useCallback } from 'react';
import ReactMarkdown from "react-markdown";
import IndexNavbar from "../Navbars/IndexNavbar";
import { Row, Col } from 'reactstrap';
import axios from "axios";
import remarkGfm from 'remark-gfm'
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

            <div className="section">
            <Row>
            <Col md="2">
            </Col>
            <Col md="7">
            <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />
            </Col>
            </Row>
            
            </div>
            
        </div>
    );

    }
    export default PostDetails;


