import React from "react";
import ApplyForm from "../components/ApplyForm";
import "./Home.css";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

import LoginForm from "../components/LoginForm";
import HomeCarousel from "../components/HomeCarousel";
import MentorsCarous from "../components/MentorsCarous";
import Programes from "../components/Programes";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
    <div className="hhhh">
    
    </div>
      <div>
        <HomeCarousel />
      </div>
      <div>
      <MentorsCarous/>
      </div>
      <div>
        <Programes/>
      </div>
      <div className="form-bg pt-3">
        <Container className="p-4 p-md-3 p-lg-5">
          <div className="form-padding " id="hh">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="New Applicant">
                <div className="applyForm ">
                  <ApplyForm />
                </div>
              </Tab>
              <Tab eventKey="profile" title="Already Applied">
                <div className="loginForm ">
                  <Container>
                    <Row className="text-center pt-5">
                      <div className="fw-bold">
                        If you are already applied, please log in!
                      </div>
                    </Row>
                    <Row className="p-5">
                      <Col md={4} className="align-content-center">
                        <div className=" d-flex justify-content-center">
                          <PersonCircle size={150} color="gray" />
                        </div>
                        {/* <div className="login-col1 fw-bold d-flex justify-content-center align-middle ">
                          If you are already applied, please log in!
                        </div> */}
                      </Col>
                      <Col className="login-col2 align-content-center">
                        <div className="loginbox p-3">
                          <LoginForm />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
