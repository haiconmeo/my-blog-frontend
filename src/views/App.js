import React from 'react';
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import PostView from 'components/Content/postView';
import DemoFooter from "components/Footers/DemoFooter.js";
import { Row ,Col} from 'reactstrap';
import SectionNavigation from "views/index-sections/SectionNavigation.js"; 
const Home = () => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
    return (
        <div>

            <LandingPageHeader />
            <div className="section">
            <Row>
            <Col md="4">
                <PostView/>
                </Col>
                <Col md="4">
                <PostView/>
                </Col>
                <Col md="4">
                <PostView/>
                </Col>

                </Row>
                </div>
            <DemoFooter />

        </div>
    );
};

export default Home;