import React, { FC, useState, useEffect } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Modal, Image } from 'react-bootstrap';
//Images
import ImgOK from '../images/icon-check.svg';

interface SectionThreeItemProbs {
    item_head: string;
    item_cost: number;
    item_par: string;
    item_left: number;
    handleShow: () => void;
}

const SectionThreeItem: FC<SectionThreeItemProbs> = ({ item_head, item_cost, item_par, item_left, handleShow }) => {
    const [dis, setDis] = useState(false);
    
    useEffect(() => { 
        if (item_left === 0) { 
            setDis(true); 
        } else { 
            setDis(false); 
        } 
    }, [item_left]);

    return(
        <Container fluid className={`border rounded-3 p-4 ${dis ? 'cs-opacity' : ''}`}>
            <Row className='gap-lg-0 gap-3'>
                <Col lg={6} xs={12}>
                    <h4 className='cs-fw-700'>{item_head}</h4>
                </Col>
                <Col lg={6} xs={12} className='text-lg-end text-start'>
                    <h5 className='cs-tc-cyan'>Pledge ${item_cost} or more</h5>
                </Col>
                <Col xs={12} className='my-lg-3 my-0'>
                    <p className='cs-tc-dark-gray'>{item_par}</p>
                </Col>
                <Col lg={8} xs={12} className='d-flex flex-row align-items-center justify-content-start'>
                    <h5 className='h3 cs-fw-700 me-2 my-0'>{item_left}</h5>
                    <p className='my-auto'>left</p>
                </Col>
                <Col lg={4} xs={7}>
                    <Button type='button' onClick={handleShow} disabled={dis} className='w-100 cs-btn cs-transition py-2 rounded-pill cs-bg-cyan cs-fw-500 border-0'>Select Reward</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionThreeItem;