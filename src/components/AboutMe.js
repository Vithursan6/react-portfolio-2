import React from 'react'
import author from '../images/me.jpg'

const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className='photo-wrap mb-5'>
                    <img className='animate__animated animate__zoomIn animate__slow profile-img' src={author} alt="author..." />
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className='about-heading'>About Me</h1>
                <p className='about-p'>
                    Hello! My Name is Vithursan Muthulingam, a recent graduate from University of Toronto's School of Continuing
                    Studies Web Development Boot Camp. I have had a strong passion for computers and coding since I was a
                    child and have been enrolled in several programming and animation programs at a young age.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
