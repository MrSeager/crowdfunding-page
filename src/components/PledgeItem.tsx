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
}

const PledgeItem: FC< PledgeItemProps> = ({ label, par, left, cost, isChecked, handleCheck }) => {
    return(
        <Container className={`border rounded rounded-3 p-3 ${left === 0 ? 'cs-opacity' : ''}`}>
            <Row>
                <Col xs={11} className='d-flex flex-row align-items-center'>
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
                    <h5 className='cs-tc-cyan h6 cs-fw-700 ms-2 my-0'>{cost !== null ? `Pledge $${cost} or more` : ''}</h5>
                </Col>
                <Col xs={1} className='d-flex flex-row align-items-center justify-content-end'>
                    <h5 className='h4 cs-fw-700 me-2 my-0'>{left}</h5>
                    <p className='my-auto'>{left !== null ? 'left' : ''}</p>
                </Col>
                <Col xs={11} className='ms-auto p-0'>
                    <p className='cs-tc-dark-gray m-0'>{par}</p>
                </Col>
                {isChecked && 
                    <Col as={Row} xs={12} className='border-top mx-0 mt-3 pt-3 align-items-center'>
                        <Col xs={5}>
                            <p className='m-0 cs-tc-dark-gray'>Enter your pledge</p>
                        </Col>
                        <Col xs={3}>
                            <InputGroup className='border border-2 rounded-pill cs-input cs-transition'>
                                <InputGroup.Text className='border-0 bg-transparent cs-tc-dark-gray'>$</InputGroup.Text>
                                <Form.Control className='shadow-none border-0 rounded-end-pill' />
                            </InputGroup>
                        </Col>
                        <Col xs={4}>
                            <Button type='button' className='w-100 cs-btn cs-transition px-4 py-2 rounded-pill cs-bg-cyan cs-fw-500 border-0'>Continue</Button>
                        </Col>
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default PledgeItem;