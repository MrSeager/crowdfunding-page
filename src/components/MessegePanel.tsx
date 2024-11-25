import React, { FC } from 'react';
//Bootstrap
import { Modal, Image, Button } from 'react-bootstrap';
//Images
import ImgOK from '../images/icon-check.svg';

interface MessegePanelProps {
    showMessage: boolean;
    handleClose: () => void;
    messege_head: string;
    messege_par: string;
}

const MessegePanel: FC<MessegePanelProps> = ({ showMessage, handleClose, messege_head, messege_par }) => {
    return(
        <Modal show={showMessage} onHide={handleClose} centered>
            <Modal.Header className='mt-3 border-0 mx-auto'>
                <Modal.Title className='d-flex flex-column align-items-center cs-fw-700'>
                    <Image fluid src={ImgOK} alt='check' className='mb-4' />
                    {messege_head}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center cs-tc-dark-gray py-0 px-4'>
                {messege_par}
            </Modal.Body>
            <Modal.Footer className='border-0 mb-3'>
                <Button type='button' onClick={handleClose} className='mx-auto cs-btn cs-transition py-2 px-4 rounded-pill cs-bg-cyan cs-fw-500 border-0'>Got it!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MessegePanel;