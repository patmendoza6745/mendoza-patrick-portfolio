import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import me from '../../assets/images/me.jpeg'
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'P', 'a', 't', 'r', 'i', 'c', 'k', '.']
    const titleArray = ['A', 's', 'p', 'i','r' ,'i' ,'n' ,'g', ' ', 
                        'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 
                        'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>    
                <br/> 
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span>  
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={22}/>
                <img src={me} alt="me!"/>
                </h1>
                <br />
                <h2>EECS @ UC Berkeley | SWE Intern @ Esync Technologies</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home;
