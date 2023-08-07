import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Contact = () => {
    const formInitialDetails = {
        firtname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                            <img src={contactImg} alt="Contact Us" />
                        </AnimationOnScroll>
                    </Col>
                    <Col size={12} md={6}>
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutRight">
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                </Row>
                                {
                                    status.message &&
                                    <Row>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Row>
                                }
                            </form>
                        </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}