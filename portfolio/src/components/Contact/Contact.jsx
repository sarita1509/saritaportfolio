import { faFacebookF,faInstagram,faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import './contact.css'
import CircleButton from '../CircleButton/CircleButton'

const Contact = () => {
    const handleClick = (url)=>{
        window.open(url, '_blank');
    }
  return (
    <section className='contact' id='contact'>
        <h2 className="text-center heading mb-0" style={{"fontFamily": "cursive",}}> &nbsp; Connect me on.</h2>
        <h5 className='mb-2'>Fell free to connect on these sites.</h5>
        <div className='icon-button-container'>
            <CircleButton icon={faFacebookF} onClick={()=>handleClick('https://www.facebook.com/sarita.shivyangni')} />
            <CircleButton icon ={faGithub} onClick={()=>handleClick('https://github.com/sarita1509')} />
            <CircleButton icon={faInstagram} onClick={()=>handleClick('https://www.instagram.com/shivyangni/?hl=en')} />
            <CircleButton icon ={faLinkedinIn} onClick={()=>handleClick('https://www.linkedin.com/in/sarita-kumari-213646279/')} />
          
        </div>

    </section>
  )
}

export default Contact