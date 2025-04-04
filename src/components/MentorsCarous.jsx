import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photo1 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 1.png";
import photo2 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 2.png";
import photo3 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 3.png";
import photo4 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 4.png";
import photo5 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 5.png";
import photo6 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 6.png";
import photo7 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 7.png";
import photo8 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 8.png";
import photo9 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 9.png";
import photo10 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 10.png";
import photo11 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 11.png";
import photo12 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 12.png";
import photo13 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 13.png";
import photo14 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 14.png";
import photo15 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 15.png";
import photo16 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 16.png";
import photo17 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 17.png";
import photo18 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 18.png";
import photo19 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 19.png";
import photo20 from "../images/mentors/NAUSHAD KALAPPADAN.zip - 20.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./MentorsCarouse.css";


function MentorsCarous() {
    const mentorsPhotos = [
        { photo: photo1, name: "arshid" },
        { photo: photo2, name: "athil" },
        { photo: photo3, name: "athil" },
        { photo: photo4, name: "athil" },
        { photo: photo5, name: "athil" },
        { photo: photo6, name: "athil" },
        { photo: photo7, name: "athil" },
        { photo: photo8, name: "athil" },
        { photo: photo9, name: "athil" },
        { photo: photo10, name: "athil" },
        { photo: photo11, name: "athil" },
        { photo: photo12, name: "athil" },
        { photo: photo13, name: "athil" },
        { photo: photo14, name: "athil" },
        { photo: photo15, name: "athil" },
        { photo: photo16, name: "athil" },
        { photo: photo17, name: "athil" },
        { photo: photo18, name: "athil" },
        { photo: photo19, name: "athil" },
        { photo: photo20, name: "athil" },
      ];
    
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      return (
        <div className="pt-5 ggg ">
          <Container className="mentors-bg">
            <Row className="p-5">
              <h1 className="h-1">Mentors</h1>
              <Carousel responsive={responsive}>
                {mentorsPhotos &&
                  mentorsPhotos.map((image, i) => (
                    <Col md={12} className="d-flex justify-content-center" key={i}>
                      <Card className="img-1" style={{ width: "15rem" }}>
                        <Card.Img
                          className="w-100 img-stl"
                          variant="top"
                          src={image.photo}
                        />
                        <Card.Body>
                          <Card.Title className="txt">{image.name}</Card.Title>
    
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Carousel>
            </Row>
          </Container>
        </div>
      );
    }
    

export default MentorsCarous