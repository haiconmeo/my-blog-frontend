/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/my-blog-frontend

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/my-blog-frontend/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {

  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content"  >
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/default-avatar.png").default}
              />
            </div>
            <div className="name">
              <h4 className="title" style={{fontFamily:"'Inconsolata', monospace"}}>
                Hoàng Hữu Mạnh <br />
              </h4>
              <h6 className="description" style={{fontFamily:"'Inconsolata', monospace"}} >developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p style={{fontFamily:"'Inconsolata', monospace",color:"#000000"}}>
                Hi, tôi là Mạnh, rất vui vì bạn quan tâm đến các vài viết của tôi trên blog này. Mọi bài viết trên blog này đều là hiểu biết và quan điểm cá nhân của tôi.
                Nếu có sai sót vui lòng góp ý cho tôi đến email hoanghuumanh54gmail.com. Cảm ơn!!!
              </p>
              <br />

            </Col>
          </Row>
          <br />
          

        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
