import React, { FC } from 'react';
//Components
import { useInView } from 'react-intersection-observer';
import './CFStyle.css';
import CFNavbar from './CFNavbar.tsx';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
import SectionThree from './SectionThree.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';


interface LineProps { 
    head_1: string; 
    par_1: string; 
    head_2_1: string; 
    par_2_1: string; 
    head_2_2: string; 
    par_2_2: string; 
    head_2_3: string; 
    par_2_3: string; 
    head_3: string;
    par_3_1: string;
    par_3_2: string;

    messege_head: string;
    messege_par: string;
}

interface LinePropsItems {
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
}

interface LinePropsPledge {
    secOneItem_head: string;
    secOneItem_par: string;
}

const CFPage: FC = () => {
    const lineProps: LineProps = {
        head_1: 'Mastercraft Bamboo Monitor Riser',
        par_1: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',

        head_2_1: '$89,914',
        par_2_1: 'of $100,000 backed',
        head_2_2: '5,007',
        par_2_2: 'total backers',
        head_2_3: '56',
        par_2_3: 'days left',

        head_3: 'About this project',
        par_3_1: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
        par_3_2: "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",

        messege_head: 'Thanks for your support!',
        messege_par: 'Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.',
    };

    const linePropsItems: LinePropsItems = {
        item_head_0: 'Pledge with no reward',
        item_par_0: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',

        item_head_1: 'Bamboo Stand',
        item_cost_1: 25,
        item_par_1: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        item_left_1: 101,

        item_head_2: 'Black Edition Stand',
        item_cost_2: 75,
        item_par_2: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        item_left_2: 64,

        item_head_3: 'Mahogany Special Edition',
        item_cost_3: 200,
        item_par_3: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        item_left_3: 0,
    }

    const linePropsPledge: LinePropsPledge = {
        secOneItem_head: 'Back this project',
        secOneItem_par: 'Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?',
    }
    
    const [ref, inView] = useInView({ 
        triggerOnce: true, 
        // Trigger animation only once 
        threshold: 0.1, 
        // Trigger when 10% of the component is visible 
    });

    const springAnim = useSpring ({
        opacity: inView ? 1 : 0, 
        scale: inView ? 1 : 0,
        config: { tension: 120, friction: 15 },
    });

    
    const barAnim = useSpring ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {tension: 120, friction: 15},
    });


    return(
        <Container fluid className='min-vh-100 gap-3 cs-bg-image d-flex flex-column align-items-center justify-content-center py-5 overflow-hidden'>
            <animated.div style={barAnim}>
                <CFNavbar />
            </animated.div>
            <SectionOne
                messege_head={lineProps.messege_head}
                messege_par={lineProps.messege_par}
                head={lineProps.head_1}
                par={lineProps.par_1}
                linePropsItems={linePropsItems}
                linePropsPledge={linePropsPledge}
            />
            <SectionTwo 
                head_1={lineProps.head_2_1}
                par_1={lineProps.par_2_1}
                head_2={lineProps.head_2_2}
                par_2={lineProps.par_2_2}
                head_3={lineProps.head_2_3}
                par_3={lineProps.par_2_3}
            />
            <SectionThree 
                head_1={lineProps.head_3}
                par_1={lineProps.par_3_1}
                par_2={lineProps.par_3_2}
                linePropsItems={linePropsItems}
                messege_head={lineProps.messege_head}
                messege_par={lineProps.messege_par}
            />
        </Container>
    );
}

export default CFPage;