import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { Component, useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import TrackVisibility from 'react-on-screen';
import { AnimationOnScroll } from 'react-animation-on-scroll';

/*********CircularProgressBar*********/
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../Skills.css'
import 'react-circular-progressbar/dist/styles.css';

/*********React Icon*********/
import { FaBeer } from 'react-icons/fa';
import { AiOutlineTeam } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { GiTalk } from "react-icons/gi";

export const PercentageBar = ({ value }) => {
    return (
        <VisibilitySensor>
            {({ isVisible }) => {
                const percentage = isVisible ? value : 0;
                return (
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',

                            // Text size
                            textSize: '18px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 2,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',
                        })}
                    />
                );
            }}
        </VisibilitySensor>
    )
}

export const HardSkills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
            <div className="item">
                <PercentageBar value={85} />
                <h5>SQL</h5>
            </div>
            <div className="item">
                <PercentageBar value={60} />
                <h5>JAVA</h5>
            </div>
            <div className="item">
                <PercentageBar value={75} />
                <h5>JavaScript</h5>
            </div>
            <div className="item">
                <PercentageBar value={60} />
                <h5>PHP</h5>
            </div>
            <div className="item">
                <PercentageBar value={65} />
                <h5>Python</h5>
            </div>
            <div className="item">
                <PercentageBar value={90} />
                <h5>HTML/CSS</h5>
            </div>
            <div className="item">
                <PercentageBar value={40} />
                <h5>C++</h5>
            </div>
        </Carousel>
    )
}

export const SoftSkills = () => {
    return (
        <Container className="d-grid gap-3">
            <Row class="d-flex">
                <Col>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOut="animate__fadeOutLeftBig">
                        <div class="soft-skill">
                            <div>
                                <AiOutlineTeam className="icon" size={25} />
                            </div>
                            <div>
                                <h3>Teamwork</h3>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </Col>
                <Col>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOut="animate__fadeOutLeftBig" delay={100}>
                        <div class="soft-skill">
                            <div>
                                <RiTeamFill className="icon" size={25} />
                            </div>
                            <div>
                                <h3>Leadership</h3>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </Col>
                <Col>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOut="animate__fadeOutLeftBig" delay={200}>
                        <div class="soft-skill">
                            <div>
                                <GiTalk className="icon" size={25} />
                            </div>
                            <div>
                                <h3>Communication</h3>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </Col>
            </Row>
            {/* <Row class="d-flex">
                <Col>
                    <div class="soft-skill d-flex align-items-center">
                        <div class="icon">
                            <FaBeer size={25}/>
                        </div>
                        <div>
                            <h3>Respectful</h3>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="soft-skill d-flex align-items-center">
                        <div class="icon">
                            <FaBeer size={25}/>
                        </div>
                        <div>
                            <h3>ProblemSolving</h3>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="soft-skill d-flex align-items-center">
                        <div class="icon">
                            <FaBeer size={25}/>
                        </div>
                        <div>
                            <h3>Communication</h3>
                        </div>
                    </div>
                </Col>
            </Row> */}
        </Container>
    );
}

export const Skills = () => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Skills I have gained from my University, Internship, and Organization in developing a project and organizing an event in my university</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Hard</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Soft</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <HardSkills />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <SoftSkills />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}