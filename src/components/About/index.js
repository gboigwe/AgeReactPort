import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faR } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';


const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15} />
          </h1>
          <p>
            An enthusiastic tech lover, with the aim of making tech a lifestyle not just for me but for all. I have the skill set to achieve
            the tech goals from tech ideas I encounter. Over the years, I have been gaining experience in the process of supporting several
            tech innovative during my undergraduate days. I have participated in some tech activities such as the Microsoft Student Learn
            ambassador boot-camp that held as a tech event in my school, completing several joint works of building standard website for
            different organization.
          </p>
          <p>
            I have worked on several web projects, analyzed data of different sort during my undergraduate school days. With my expertise,
            I am sure to carry out any analysis on any data and to join any group in carrying out a project and to get any task given to me
            done based on my listed skills.
          </p>
          <p className='nthText'>
            A graduate from the department of Statistics, Federal University of Agriculture, Abeokuta, Ogun state, Nigeria. Tutoring my course
            mates on different occasions on how to use a particular analysis tool, python and R programming language whenever my department
            gives any project or ask us to complete a task before a stipulated deadline. coding for over 5 years, I have successfully built
            websites for personal use and numerous organizational uses. I am currently working on a personal project with node js, the main
            aim of this project is to create an e-commerce platform for small businesses to grow, with an encouragement to rise to an higher
            level in the business world today.
          </p>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faR} color="#EFD81D" />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About