import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    // const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting)
            setDelta(prevDelta => prevDelta / 2);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                            <span className="tagline">Welcome to my Portfolio</span>
                            <div className="banner-fixed">
                                <h1>
                                    {"Hi I'm Bryan Keane"}<br></br>
                                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                        <span className="wrap">{text}
                                        </span>
                                    </span>
                                </h1>
                            </div>
                            <p>I am a skilled and driven developer with a passion for creating intuitive and visually appealing websites that provide an optimal user experience. I have extensive experience in HTML, CSS, JavaScript and various front-end frameworks, as well as a strong understanding of responsive design and accessibility principles.</p>
                            <a href="#connect">
                                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                            </a>
                        </AnimationOnScroll>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <AnimationOnScroll animateIn="animate__zoomInRight" animateOut="animate__fadeOut" delay={500}>
                            <img src={headerImg} alt="Header Img" />
                        </AnimationOnScroll>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}