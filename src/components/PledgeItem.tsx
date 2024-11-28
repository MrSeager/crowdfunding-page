import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

interface PledgeItemProps {
    label: string;
    par: string;
    left: number | null;
    cost: number | null;
    isChecked: boolean; 
    handleCheck: () => void;
    handleClosePanel: () => void;
    handleShow: () => void;
}

const PledgeItem: FC< PledgeItemProps> = ({ label, par, left, cost, isChecked, handleCheck, handleClosePanel, handleShow }) => {
    const handleContinue = () => {
        handleClosePanel();
        handleShow();
    }
    
    return(
        <Container className={`cs-bc-${isChecked ? 'cyan' : 'gray'} cs-transition rounded rounded-3 p-3 ${left === 0 ? 'cs-opacity' : ''}`}>
            <Row>
                <Col lg={{ span: 11, order: 1 }} xs={{ span: 12, order: 1 }} className='d-flex flex-lg-row flex-column align-items-lg-center align-items-start'>
                    <Form.Check
                        disabled={left === 0}
                        label={label}
                        name='group1'
                        type='radio'
                        id='radio-1'
                        checked={isChecked} 
                        onChange={handleCheck}
                        className='cs-fw-700 cs-radio cs-transition my-0'
                    />
                    <h5 className='cs-tc-cyan h6 cs-fw-700 ms-lg-2 ms-4 my-0'>{cost !== null ? `Pledge $${cost} or more` : ''}</h5>
                </Col>
                <Col lg={{ span: 1, order: 2 }} xs={{ span: 12, order: 3 }} className='d-flex flex-row align-items-center justify-content-lg-end justify-content-start'>
                    <h5 className='h4 cs-fw-700 me-2 my-0'>{left}</h5>
                    <p className='my-auto'>{left !== null ? 'left' : ''}</p>
                </Col>
                <Col lg={{ span: 11, order: 3 }} xs={{ span : 12, order: 2}} className='ms-auto p-lg-0 p-2'>
                    <p className='cs-tc-dark-gray m-0'>{par}</p>
                </Col>
                {isChecked && 
                    <Col as={Row} xs={{ span: 12, order: 4 }} className='border-top mx-0 mt-3 pt-3 align-items-center'>
                        <Col lg={5} xs={12} className='mb-lg-0 mb-3'>
                            <p className='text-lg-start text-center m-0 cs-tc-dark-gray'>Enter your pledge</p>
                        </Col>
                        <Col lg={3} xs={6}>
                            <InputGroup className='border border-2 rounded-pill cs-input cs-transition'>
                                <InputGroup.Text className='border-0 bg-transparent cs-tc-dark-gray'>$</InputGroup.Text>
                                <Form.Control 
                                    type='number' 
                                    defaultValue={cost === null ? 1 : cost}
                                    min={cost === null ? 1 : cost}
                                    className='p-0 cs-fw-700 shadow-none border-0 rounded-end-pill' />
                            </InputGroup>
                        </Col>
                        <Col lg={4} xs={6}>
                            <Button type='button' onClick={handleContinue} className='w-100 cs-btn cs-transition px-4 py-2 rounded-pill cs-bg-cyan cs-fw-500 border-0'>Continue</Button>
                        </Col>
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default PledgeItem;