import React, { useEffect, useState } from 'react';
import PostView from '../components/Content/postView';
import DemoFooter from "components/Footers/DemoFooter.js";
import { Row, Col } from 'reactstrap';
import IndexNavbar from "../components/Navbars/IndexNavbar";
import axios from "axios";
import './App.css';
import { Link } from "react-router-dom";
const App = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const [listTeam, setlistTeam] = useState([]);
  const get_data = async () => {
    let callAPI = "https://haiconmeo.site/"
    console.log(callAPI)
    try {
      const data = await axios.get(
        callAPI
      );
      console.log(data.data)
      setlistTeam(data.data);

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
      {/* <LandingPageHeader /> */}
      <div className="section"  style={{backgroundColor:"#131127"}} >
        <Row>
        <Col md="2"></Col>
          <Col md="7">
            <div><h2><b style={{color:"#c39eff"}}>NỔI BẬT</b></h2></div>
            {listTeam.map(dt => (
              // <Link to={`/docs/${dt.docs}`}>
                <PostView data={dt} />
                // </Link>

            ))}
            {/* <SectionProgress /> */}
          </Col>
          <Col md="3">
            {/* <CountView /> */}
            <div><h2><b style={{color:"#c39eff"}}>Bài viết mới</b></h2></div>
            {/* <p style={{fontFamily:"font-family: 'Inconsolata', monospace;"}}>Bài viết mới</p> */}

          </Col>
        </Row>

      </div>
      <DemoFooter />

    </div>
  );
};

export default App;