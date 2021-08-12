/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionNavbars() {
  return (
    <>
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <div className="title">
            <h3>Hai Con Meo</h3>
          </div>
          <br />
          <Row>
            <Col md="12">
              <Navbar className="bg-primary" expand="lg">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Hai Con Meo
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-menu"
                  data-toggle="collapse"
                  id="navbar-menu"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-menu">
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Bài Viết
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Tài liệu sưu tầm
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Dataset
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        github
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionNavbars;
