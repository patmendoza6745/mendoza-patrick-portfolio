import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import me from '../../assets/images/me.jpeg'
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const introArray = ['H', 'i', ' ', 't', 'h', 'e', 'r', 'e', '!']
    const nameArray = [' ', 'P', 'a', 't', 'r', 'i', 'c', 'k', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={10}/>
                <br/> 
                <span className={`${letterClass} _22`}>I</span> 
                <span className={`${letterClass} _23`}>'m</span>  
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={24}/>
                <br />
                <img src={me} alt="me!"/>
                </h1>
                <br />
                <h2>EECS & Math @ UC Berkeley | MLE Intern @ Hyphenova Network | SWE Intern @ Esync Technologies</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home;
