import React from "react";
import "./LoginForm.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";

function LoginForm() {
  const { Formik } = formik;
  const schema = yup.object().shape({
    phone: yup.string().required("enter your number"),
    otp: yup.string().required("enter OTP number"),
  });
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div>
      {" "}
      <Container>
        <Row className="justify-content-center login p-3">
          <Col>
            <Formik
              validationSchema={schema}
              onSubmit={submitForm}
              initialValues={{
                phone: "",
                otp: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                touched,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3 d-flex justify-content-between ">
                    <Form.Group
                      as={Col}
                      controlId="validationFormik03"
                      className="position-relative"
                    >
                      <Form.Label>Phone:</Form.Label>

                      <Form.Control
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        value={values.phone}
                        onChange={handleChange}
                        isValid={touched.phone && !errors.phone}
                        isInvalid={!!errors.phone}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <div>
                    <Button className="fw-bolder btnn-width">Send OTP</Button>
                  </div>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      controlId="validationFormik04"
                      className="position-relative otp-field"
                    >
                      <Form.Label>OTP:</Form.Label>

                      <Form.Control
                        type="text"
                        name="otp"
                        placeholder="Enter OTP"
                        value={values.otp}
                        onChange={handleChange}
                        isValid={touched.otp && !errors.otp}
                        isInvalid={!!errors.otp}
                        inputMode="numeric"
                        pattern="\d*"
                        maxLength={6}
                        aria-describedby="otpFeedback"
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback
                        id="otpFeedback"
                        type="invalid"
                        tooltip
                      >
                        {errors.otp}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <div className="text-end">
                    <Button type="submit">Apply now</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
