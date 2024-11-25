import React, { FC, useState } from 'react';
//Components
import { useInView } from 'react-intersection-observer';
import SectionThreeItem from './SectionThreeItem.tsx';
import MessegePanel from './MessegePanel.tsx';
//Spring
import { useSpring, animated } from '@react-spring/web';

interface SectionThreeProps {
    head_1: string;
    par_1: string;
    par_2: string;
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
    messege_head: string;
    messege_par: string;
}

const SectionThree: FC<SectionThreeProps> = ({ head_1, par_1, par_2, linePropsItems, messege_head, messege_par }) => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClose = () => setShowMessage(false);
    const handleShow = () => setShowMessage(true);
    
    const [ref, inView] = useInView({ 
        threshold: 0.05, 
    });

    const springAnim = useSpring ({
        opacity: inView ? 1 : 0, 
        scale: inView ? 1 : 0,
        config: { tension: 120, friction: 15 },
    });
    
    return (
        <animated.div ref={ref} style={springAnim} className='bg-white rounded rounded-3 cs-w border p-4 d-flex flex-column align-items-start gap-3'>
            <h3 className='h4 cs-fw-700'>{head_1}</h3>
            <p className='cs-tc-dark-gray'>{par_1}</p>
            <p className='cs-tc-dark-gray'>{par_2}</p>
            <SectionThreeItem
                item_head={linePropsItems.item_head_1}
                item_cost={linePropsItems.item_cost_1}
                item_par={linePropsItems.item_par_1}
                item_left={linePropsItems.item_left_1}
                handleShow={handleShow}
            />
            <SectionThreeItem
                item_head={linePropsItems.item_head_2}
                item_cost={linePropsItems.item_cost_2}
                item_par={linePropsItems.item_par_2}
                item_left={linePropsItems.item_left_2}
                handleShow={handleShow}
            />
            <SectionThreeItem
                item_head={linePropsItems.item_head_3}
                item_cost={linePropsItems.item_cost_3}
                item_par={linePropsItems.item_par_3}
                item_left={linePropsItems.item_left_3}
                handleShow={handleShow}
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

export default SectionThree;