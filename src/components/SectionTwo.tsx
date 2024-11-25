import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
//Bootstrap
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

interface SectionTwoProps {
    head_1: string;
    par_1: string;
    head_2: string;
    par_2: string;
    head_3: string;
    par_3: string;
}

const SectionTwo: FC<SectionTwoProps> = ({ head_1, par_1, head_2, par_2, head_3, par_3 }) => {
    const [ref, inView] = useInView({
        threshold: 0.1, 
    });

    const springAnim = useSpring ({
        opacity: inView ? 1 : 0, 
        scale: inView ? 1 : 0,
        config: { tension: 120, friction: 15 },
    });
    
    return(
        <animated.div ref={ref} style={springAnim} className='bg-white rounded rounded-3 cs-w border p-4'>
            <Row>
                <Col lg={4} xs={12} className='px-4 py-lg-0 py-3'>
                    <h2 className='m-0 cs-fw-700 w-100'>{head_1}</h2>
                    <p className='m-0 cs-tc-dark-gray w-100'>{par_1}</p>
                </Col>
                <Col lg={4} xs={12} className='cs-border px-4 py-lg-0 py-3'>
                    <h2 className='m-0 cs-fw-700 w-100'>{head_2}</h2>
                    <p className='m-0 cs-tc-dark-gray w-100'>{par_2}</p>
                </Col>
                <Col lg={4} xs={12} className='px-4 py-lg-0 py-3'>
                    <h2 className='m-0 cs-fw-700 w-100'>{head_3}</h2>
                    <p className='m-0 cs-tc-dark-gray w-100'>{par_3}</p>
                </Col>
                <Col xs={12} className='pt-4 pb-3'>
                    <ProgressBar now={75} className='cs-pb rounded-pill' />
                </Col>
            </Row>
        </animated.div>
    );
}

export default SectionTwo;