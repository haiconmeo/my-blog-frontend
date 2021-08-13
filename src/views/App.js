import React from 'react';
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import PostView from 'components/Content/postView';
import DemoFooter from "components/Footers/DemoFooter.js";
import { Row, Col } from 'reactstrap';
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import CountView from "views/index-sections/countView.js"
const App = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <div>

      <IndexNavbar />
      <LandingPageHeader/>
      <div className="section">

        <Row>
          <Col md="9">
            <PostView />
            <PostView />
            <PostView />
            <PostView />
            <SectionProgress />
          </Col>
          <Col md="3">
            <CountView />
            <p>Bài viết mới</p>
            <PostView />
            <PostView />
            <PostView />
            <PostView />
          </Col>
        </Row>
        
      </div>
      <DemoFooter />

    </div>
  );
};

export default App;