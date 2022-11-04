import React from 'react';
import {
    LinkedinShareButton,
    RedditShareButton,
    WhatsappShareButton,
    EmailShareButton,
    WhatsappIcon,
    RedditIcon,
    EmailIcon,
    LinkedinIcon
} from 'react-share';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-6'>
                    <div className='d-flex'>
                        <p>Thunder Grove, Toronto, Ontario, Canada</p>
                    </div>
                    <div className='d-flex'>
                        <a href='tel:555-555-5555'>+1(555)-555-5555</a>
                    </div>
                    <div className='d-flex'>
                        <p>github.com/vithursan6</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-2 col-sm-6'>
                    <div className='row'>
                        <div className='col'>
                            <a className='footer-nav'>Home</a>
                            <br />
                            <a className='footer-nav'>About Me</a>
                            <br />
                            <a className='footer-nav'>Skills</a>
                        </div>
                        <div className='col'>
                            <a className='footer-nav'>Projects</a>
                            <br />
                            <a className='footer-nav'>Experience</a>
                            <br />
                            <a className='footer-nav'>Contact</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                            <div className='d-flex justify-content-center'>
                                <WhatsappShareButton
                                    url={'https://wa.me/qr/ZGLQXKMZT4NMD1'}
                                >
                                    <WhatsappIcon className='mx-3 social-icon' borderRadius={10} size={36}/>
                                </WhatsappShareButton>
                                <RedditShareButton
                                    url={'https://www.reddit.com/u/PristineStrength2706?utm_medium=android_app&utm_source=share '}
                                >
                                    <RedditIcon className='mx-3 social-icon' borderRadius={10} size={36} />
                                </RedditShareButton>
                                <EmailShareButton
                                    url={'vithursanm.dev.inquiries@gmail.com'}
                                >
                                    <EmailIcon className='mx-3 social-icon' borderRadius={10} size={36} />
                                </EmailShareButton>
                                <LinkedinShareButton>
                                    <LinkedinIcon className='mx-3 social-icon' borderRadius={10} size={36} />
                                </LinkedinShareButton>
                            </div>
                            <p className='pt-3 text-center'>
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;Vithursan Muthu | All Rights Reserved
                            </p>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
