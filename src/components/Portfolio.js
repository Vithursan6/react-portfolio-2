import React from 'react';
import weather  from '../images/weather.png';
import techBlog from '../images/techblog.png';
import socialBlog from '../images/socialblog.png';
import team from '../images/team.png';
import crypto from '../images/crypto.jpg';
import noteTaker from '../images/notetaker.png';
// Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// React popup box import
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //WEATHER
    const openPopupboxWeather = () => {
        const content = (
        <>
            <img className='portfolio-image-popupbox' src={weather} alt="weather app" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               A nulla animi error minus unde ex! Quidem assumenda ut 
               alias nulla aperiam a nam placeat, ipsa reprehenderit 
               sequi dolores ullam iusto.
            </p>
            <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/Vithursan6/Weather-Cast")}>https://github.com/Vithursan6/Weather-Cast</a>
            <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://vithursan6.github.io/Weather-Cast/")}>https://vithursan6.github.io/Weather-Cast/</a>
        </>
        )
        PopupboxManager.open({content})

    }

    const popupboxConfigWeather = {
        titleBar: {
            enable: true,
            text: "Weather Forecast App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //TECHBLOG
    const openPopupboxTechblog = () => {
        const content = (
        <>
            <img className='portfolio-image-popupbox' src={techBlog} alt="techblog app" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               A nulla animi error minus unde ex! Quidem assumenda ut 
               alias nulla aperiam a nam placeat, ipsa reprehenderit 
               sequi dolores ullam iusto.
            </p>
            <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/vithursan6/tech-blog")}>https://github.com/vithursan6/tech-blog</a>
            <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://glacial-brushlands-88300.herokuapp.com/login")}>https://glacial-brushlands-88300.herokuapp.com/login</a>
        </>
        )
        PopupboxManager.open({content})

    }

    const popupboxConfigTechblog = {
        titleBar: {
            enable: true,
            text: "Tech Blog App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //SOCIALBLOG
    const openPopupboxSocialblog = () => {
        const content = (
        <>
            <img className='portfolio-image-popupbox' src={socialBlog} alt="socialblog app" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               A nulla animi error minus unde ex! Quidem assumenda ut 
               alias nulla aperiam a nam placeat, ipsa reprehenderit 
               sequi dolores ullam iusto.
            </p>
            <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/thumbolinat/project-2-blog")}>https://github.com/thumbolinat/project-2-blog</a>
            <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://portside.herokuapp.com/")}>https://portside.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({content})

    }

    const popupboxConfigSocialblog = {
        titleBar: {
            enable: true,
            text: "Social Blog App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

   //TEAM
   const openPopupboxTeam = () => {
    const content = (
    <>
        <img className='portfolio-image-popupbox' src={team} alt="Team Profile Generator app" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           A nulla animi error minus unde ex! Quidem assumenda ut 
           alias nulla aperiam a nam placeat, ipsa reprehenderit 
           sequi dolores ullam iusto.
        </p>
        <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/vithursan6/team-profile-gen")}>https://github.com/vithursan6/team-profile-gen</a>
    </>
    )
    PopupboxManager.open({content})

    }

    const popupboxConfigTeam = {
        titleBar: {
            enable: true,
            text: "Team Profile Generator App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

   //CRYPTO
   const openPopupboxCrypto = () => {
    const content = (
    <>
        <img className='portfolio-image-popupbox' src={crypto} alt="Crypto Dashboard app" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           A nulla animi error minus unde ex! Quidem assumenda ut 
           alias nulla aperiam a nam placeat, ipsa reprehenderit 
           sequi dolores ullam iusto.
        </p>
        <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/Vithursan6/crypto-dash")}>https://github.com/Vithursan6/crypto-dash</a>
        <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://vithursan6.github.io/crypto-dash/")}>https://vithursan6.github.io/crypto-dash/</a>
    </>
    )
    PopupboxManager.open({content})

    }

    const popupboxConfigCrypto = {
        titleBar: {
            enable: true,
            text: "Crypto Dashboard App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

   //NOTETAKER
   const openPopupboxNotetaker = () => {
    const content = (
    <>
        <img className='portfolio-image-popupbox' src={noteTaker} alt="Note Taker app" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           A nulla animi error minus unde ex! Quidem assumenda ut 
           alias nulla aperiam a nam placeat, ipsa reprehenderit 
           sequi dolores ullam iusto.
        </p>
        <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/Vithursan6/Note-taker")}>https://github.com/Vithursan6/Note-taker</a>
        <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://sleepy-escarpment-11517.herokuapp.com/")}>https://sleepy-escarpment-11517.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({content})

    }

    const popupboxConfigNotetaker = {
        titleBar: {
            enable: true,
            text: "Note Taker App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



  return (
    <div className='portfolio-wrapper'>
        <div className='container'>
            <h1 className='text-uppercase text-center py5'>projects</h1>


            <div className='image-box-wrapper row justify-content-center'>
                <div className='portfolio-image-box' onClick={openPopupboxWeather}>
                    <img className='portfolio-image' src={weather} alt="weather app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>



                <div className='portfolio-image-box'  onClick={openPopupboxTechblog}>
                    <img className='portfolio-image' src={techBlog} alt="tech blog app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>



                <div className='portfolio-image-box' onClick={openPopupboxSocialblog}>
                    <img className='portfolio-image' src={socialBlog} alt="social blogging app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>


                <div className='portfolio-image-box' onClick={openPopupboxTeam}>
                    <img className='portfolio-image' src={team} alt="team profile app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>



                <div className='portfolio-image-box' onClick={openPopupboxCrypto}>
                    <img className='portfolio-image' src={crypto} alt="crypto dashboard app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>


                <div className='portfolio-image-box' onClick={openPopupboxNotetaker}>
                    <img className='portfolio-image' src={noteTaker} alt="note taker app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
            </div>

        </div>
        <PopupboxContainer {...popupboxConfigWeather} />
        <PopupboxContainer {...popupboxConfigTechblog} />
        <PopupboxContainer {...popupboxConfigSocialblog} />
        <PopupboxContainer {...popupboxConfigTeam} />
        <PopupboxContainer {...popupboxConfigCrypto} />
        <PopupboxContainer {...popupboxConfigNotetaker} />

    </div>
  )
}

export default Portfolio
