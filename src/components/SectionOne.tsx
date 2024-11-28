import React, { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';
//Components
import SectionOnePanel from './SectionOnePanel.tsx';
import MessegePanel from './MessegePanel.tsx';
//Bootstrap
import { Container, Image, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { IoIosBookmark } from "react-icons/io";
//Images
import ImgLogo from '../images/logo-mastercraft.svg';

interface SectionOneProps {
    messege_head: string;
    messege_par: string;
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

const SectionOne: FC<SectionOneProps> = ({ messege_head, messege_par, head, par, linePropsItems, linePropsPledge }) => {
    const [checked, setChecked] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleClosePanel = () => setShowPanel(false);
    const handleShowPanel = () => setShowPanel(true);

    const handleClose = () => setShowMessage(false);
    const handleShow = () => setShowMessage(true);

    const [ref, inView] = useInView({
        threshold: 0.1, 
    });

    const springAnim = useSpring ({
        opacity: inView ? 1 : 0, 
        scale: inView ? 1 : 0,
        config: { tension: 120, friction: 15 },
    });

    return(
        <animated.div ref={ref} style={springAnim} className='bg-white border rounded rounded-3 cs-w text-center cs-position d-flex flex-column align-items-center gap-2 pt-5 pb-4 px-3 cs-mt'>
            <Image fluid src={ImgLogo} alt='logo' className='cs-logo' />
            <h1 className='cs-fw-700 h2'>{head}</h1>
            <p className='cs-tc-dark-gray'>{par}</p>
            <Container className='d-flex flex-lg-row flex-column gap-lg-0 gap-3 align-items-center justify-content-between'>
                <Button className='cs-btn cs-transition px-4 py-2 rounded-pill cs-bg-cyan cs-fw-500 border-0' onClick={handleShowPanel}>Back this project</Button>
                <Button
                    onClick={() => setChecked(true)} 
                    disabled={checked} 
                    className='rounded-pill bg-light cs-tc-dark-cyan cs-fw-500 cs-transition cs-btn-toggle border-0 ps-0 pe-4 py-0 d-flex flex-row align-items-center gap-3'>
                    <Container fluid className='text-white rounded-circle cs-bg-dark-cyan py-2'>
                        <IoIosBookmark />
                    </Container>
                    {!checked ? 'Bookmarked' : 'Bookmark'}
                </Button>
            </Container>
            <SectionOnePanel
                showMessage={showPanel}
                handleClosePanel={handleClosePanel}
                handleShow={handleShow}
                head={linePropsPledge.secOneItem_head}
                par={linePropsPledge.secOneItem_par}
                linePropsItems={linePropsItems}
                linePropsPledge={linePropsPledge}
            />
            <MessegePanel 
                showMessage={showMessage}
                handleClose={handleClose}
                messege_head={messege_head}
                messege_par={messege_par}
            />
        </animated.div>
    );
}

export default SectionOne;