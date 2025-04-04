import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";
import {
  Instagram,
  Linkedin,
  Telephone,
  TwitterX,
} from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { GeoAltFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Facebook } from "react-bootstrap-icons";

function Footer() {
  return (
    <div>
      <div className="frst-ftr">
        <div className="pt-5 ftr d-flex social p-2">
          <Container>
            <Row>
              <Col xs={12} md={4} className="footer-icons">
                <div className="text-center pb-2">
                  <h3 className="footer-para mt-0 pt-0">Follow us</h3>

                  <div className="text-center media-icns  align-content-center">
                    <ul>
                      <li>
                        <Link to="#">
                          <Facebook  size={40} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <Linkedin size={40} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <TwitterX size={40} />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <Instagram size={40} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="navigation text-center p-2">
                  <h2>About us</h2>
                  <p>
                    Founded by a team of visionary entrepreneurs and seasoned
                    business leaders, Entrepreneurs’ Business School (EBS) is
                    built on the foundation of real-world wisdom, practical
                    knowledge, and invaluable insights of those who have
                    successfully navigated the challenges of building and
                    scaling businesses from the ground up. The Faculty team of
                    EBS is a unique blend of academic excellence and
                    entrepreneurial passion, .
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="contacts position-relative text-center p-2">
                  <h2 className="contacts-h2">Contacts</h2>

                  <p className="ps-0">
                    <GeoAltFill className="message" />
                    Karaparamb,Kozhikode Kerala, India
                  </p>
                  <p className="ps-0">
                    <Envelope className="message" />
                    official@ebsedu.com
                  </p>
                  <p className="ps-0">
                    <Telephone className="call" />
                    +91 9946220227
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* <div className='main '>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='footer-para1'><h5>Follow us</h5></Accordion.Header>
                        <Accordion.Body className='second' >
                            <ul  style={{ listStyle: 'none', padding: 0, margin: 0 ,color:'black'}}>
                                <li> <Link to="#"><Facebook /></Link></li>
                                <li>  <Link to="#"><Linkedin /></Link></li>
                                <li> <Link to="#"><TwitterX /></Link></li>
                                <li> <Link to="#"><Instagram /></Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                 <div className='small'>   <Accordion.Item eventKey="1">
                        <Accordion.Header className='footer-para1'><h5>About us</h5></Accordion.Header>
                        <Accordion.Body className='second'  >
                            Founded by a team of visionary entrepreneurs and seasoned business leaders, Entrepreneurs’ Business School (EBS) is built on the foundation of real-world wisdom, practical knowledge, and invaluable insights of those who have successfully navigated the challenges of building and scaling businesses from the ground up. The Faculty team of EBS is a unique blend of academic excellence and entrepreneurial passion, with members who bring firsthand experience in creating, managing, and growing thriving enterprises.
                            We are deeply committed to redefining the educational experience for aspiring entrepreneurs and professionals. Our MBA and BBA programs are meticulously crafted for providing students the modern skills, innovative mindset, and practical experiences essential for excelling in today’s dynamic and ever-evolving business environment. At Entrepreneurs’ Business School, we go beyond traditional theory— focusing on cultivating real-world capabilities that empower our students to become visionary leaders, creative problem-solvers, and forward-thinking contributors in any professional setting.
                            Our mission is to create a transformative learning platform where students not only learn the art of entrepreneurship but also gain a profound understanding of the complexities of today’s workforce. Through a holistic approach that integrates hands-on experience, personalized mentorship, leadership development, and entrepreneurial problem-solving, we prepare our students to tackle real-world challenges with confidence and ingenuity. By offering internships, partnerships with leading businesses, and immersive projects, we ensure our graduates are equipped with the skills and insights needed to thrive in the modern business landscape.
                            At EBS, we don’t just teach business—we inspire a mindset of creativity, adaptability, and resilience. Our programs emphasize critical areas such as innovation, technology integration, leadership, and global business dynamics, ensuring that our graduates are not only career-ready but also poised to create meaningful impact in their chosen fields. Whether launching their own ventures or excelling in corporate roles, our students are empowered to lead with vision and purpose.
                            Our ultimate goal is to nurture the next generation of leaders—individuals who will drive change, inspire innovation, and make a lasting impact in their communities and beyond. At Entrepreneurs Business School, we believe in the transformative power of entrepreneurship and forward-thinking education. We invite you to join our vibrant community, where passion meets purpose, and together, we will shape a new era of business leaders and innovators who will redefine the future.
                            Join us, and let’s embark on a journey to unlock your potential, ignite your entrepreneurial spirit, and create a legacy of success and innovation. Together, we will build a brighter tomorrow.
                        </Accordion.Body>
                    </Accordion.Item></div>
                </Accordion>

            </div> */}
    </div>
  );
}

export default Footer;
