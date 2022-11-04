import React from 'react'
import author from '../images/me.jpg'

const AboutMe = () => {
  return (
    <div id='about' className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className='photo-wrap mb-5'>
                    <img className='animate__animated animate__jackInTheBox animate__slow profile-img' src={author} alt="author..." />
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className='about-heading'>About Me</h1>
                <p className='about-p'>
                    Hello! My Name is Vithursan, a graduate from University of Toronto's Web Development Program. I've had a strong
                    passion for computers and coding since I was a child and have been enrolled in several programming and animation programs
                    at a young age. I am a diligent, detail-oriented Software Developer passionate about learning, researching, and writing 
                    code and I relish the opportunity to take my programming skills and experience to a company where I can continue to learn 
                    and grow as a full stack developer.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
