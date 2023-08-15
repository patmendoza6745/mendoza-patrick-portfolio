import { useEffect, useState } from 'react';
import { faCss3Alt, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray ={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>            
                I'm currently a SWE Intern at Esync Technologies working on a Machine Learning task for Cybersecurity and Data Breach Detection. 
                Previously, I was an Undergraduate Research Assistant at the RISING Lab at the University of Florida where I worked on developing generative trajectory algorithms 
                for Connected and Autonomous Vehicles (CAV) through Reduced Speed Work Zones (RSWZ) that utilized Vehicle-to-Infrastructure (V2I) communications for CAV navigation. 
                Due to the nature of these communications, there exist security issues in regards to the integrity of such communications. Thus, I also explored the various attacks 
                possible through V2I communications for a CAV's trajectory in RSWZ as well as possible detection algorithms to mitigate these communications from harming the CAV.
                </p>
                <p>
                I'm really into stuff that combines Math and Computer Science, like Machine Learning, Software Engineering, and Cybersecurity. I'm determined to see myself make
                substantial contributions to any one of these fields in the future either through research or industry.
                </p>
                <p>
                Beyond my technical experience, I was born and raised in Miami Beach, Florida, my whole life - now I'm at UC Berkeley studying EECS 
                with a minor in Applied Math across the country! Fun fact, I've been playing soccer since I was 8 - still playing!
                </p>
                <p>
                If I needed to describe myself in one word it would be tenacious.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#4584B6"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color="#F89820"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3Alt} color="#264DE4"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                </div>
            </div>
        </div>
         <Loader type="pacman" />
         </>
    )
}

export default About;