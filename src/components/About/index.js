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
                I am very interested in fields that integrate and apply Mathematical principles with Computer Science, such as Machine Learning, Software Engineering, 
                and Cybersecurity. I hope to make substantial contributions to any of these fields in the future either through research, academia, and/or industry.
                </p>
                <p>
                Currently, I'm a Machine Learning Engineer Intern at Hyphenova Network creating a Recommendation System for company-influncer/model partnerships. I'm also a 
                SWE Intern at Esync Technologies building a customer Transformer to address a specific task within Cybersecurity and Data Breach Detection. Previously, I was an
                Undergraduate Research Assistant at the University of Florida's RISING Lab where I developed a generative trajectory algorithm for Connected and Autonomous
                Vehicles (CAVs) within Reduced Speed Work Zones (RSWZ) with Vehicle-to-Infrastructure (V2I) communication, explored security risks and possible cyberattacks
                arising from malicious V2I communications, and investigated ways to detect such malicious communications using Detection and Machine Learning algorithms. I was
                also an Undergraduate Research Assistant at UC Berkeley's ACE Lab where I built an anti-cheat feature for online take-home assessments for the educational platform,
                PrairieLearn.
                </p>
                <p>
                Beyond my technical experiences and interests, I play soccer at the intramural level here at Berkeley and I serve as a Tutoring Assistant Officer
                for UC Berkeley's EECS Honors Society (HKN). My hobbies include playing soccer, playing video games (FIFA, Valorant, Minecraft - to name a few), playing chess,
                and reading. Fun fact, I have been playing soccer since I was 8 years old!
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
