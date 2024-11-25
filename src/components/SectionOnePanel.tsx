import React, { FC, useState } from 'react';
//Components
import PledgeItem from './PledgeItem.tsx';
//Bootstrap
import { Container, Modal, Form } from 'react-bootstrap';

interface SectionOneMessegeProps {
    showMessage: boolean;
    handleClose: () => void;
    head: string;
    par: string;
    linePropsItems: {
        item_head_0: string;
        item_par_0: string;
        item_head_1: string;
        item_cost_1: number;
        item_par_1: string;
        item_left_1: number;
        item_head_2: string;
        item_cost_2: number;
        item_par_2: string;
        item_left_2: number;
        item_head_3: string;
        item_cost_3: number;
        item_par_3: string;
        item_left_3: number;
    };
    linePropsPledge: {
        secOneItem_head: string;
        secOneItem_par: string;
    }
}

const SectionOnePanel: FC<SectionOneMessegeProps> = ({ showMessage, handleClose, head, par, linePropsItems, linePropsPledge }) => {
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    
    return(
        <Modal show={showMessage} onHide={handleClose} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton className='border-0'>
                <Modal.Title className='cs-fw-700'>{head}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column'>
                <p className='cs-tc-dark-gray'>{par}</p>
                <Form className='d-flex flex-column gap-3'>
                    <PledgeItem 
                        label={linePropsItems.item_head_0}
                        par={linePropsItems.item_par_0}
                        left={null}
                        cost={null}
                        isChecked={selectedItemId === '0'} 
                        handleCheck={() => setSelectedItemId('0')}
                    />
                    <PledgeItem 
                        label={linePropsItems.item_head_1}
                        par={linePropsItems.item_par_1}
                        left={linePropsItems.item_left_1}
                        cost={linePropsItems.item_cost_1}
                        isChecked={selectedItemId === '1'} 
                        handleCheck={() => setSelectedItemId('1')}
                    />
                    <PledgeItem 
                        label={linePropsItems.item_head_2}
                        par={linePropsItems.item_par_2}
                        left={linePropsItems.item_left_2}
                        cost={linePropsItems.item_cost_2}
                        isChecked={selectedItemId === '2'} 
                        handleCheck={() => setSelectedItemId('2')}
                    />
                    <PledgeItem 
                        label={linePropsItems.item_head_3}
                        par={linePropsItems.item_par_3}
                        left={linePropsItems.item_left_3}
                        cost={linePropsItems.item_cost_3}
                        isChecked={selectedItemId === '3'} 
                        handleCheck={() => setSelectedItemId('3')}
                    />
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SectionOnePanel;