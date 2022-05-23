import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9fbcvl', 'template_8jjkzdl', form.current, 'Vs7k7QR0zkm_tWTRE')
      
    e.target.reset();
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} />
          </h1>
          <p>
            Since you will be needing my services, not just now but for a lot of projects you will be working on, I'm glad I would be of help. This then calls for a discussion. <br /> Send me a mail and <span style={{ color: "orange", fontWeight: 800, fontSize: "15px" }}>LET's GET STARTED !!!</span>
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className='half'>
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                {/* <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li> */}
                <li>
                  <textarea placeholder="Message" type="text" name="msgArea" required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value="SEND" name="submit" required />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact