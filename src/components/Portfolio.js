import React from 'react';
import weather  from '../images/weather.png';
import techBlog from '../images/techblog.png';
import socialBlog from '../images/socialblog.png';
import work from '../images/work.png';
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
            <p>Weather-cast is a mobile weather forecast application. It uses a weather api to fetch current weather data, as well as a 5 day forecast. It employs localStorage to save search histories so that the user is not required to re-enter data that has already been fetched. When app is initiatiated, saved entries from localStorage are retrieved and displayed below the search window for user convenience.</p>
            <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/Vithursan6/Weather-Cast")}>https://github.com/Vithursan6/Weather-Cast</a>
            <br />
            <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://vithursan6.github.io/Weather-Cast/")}>https://vithursan6.github.io/Weather-Cast/</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Weather Forecast",
              },
            },
          });

    }

    const popupboxConfigWeather = {
        titleBar: {
            enable: true,
            text: "Weather Forecast"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //TECHBLOG
    const openPopupboxTechblog = () => {
        const content = (
        <>
            <img className='portfolio-image-popupbox' src={techBlog} alt="techblog app" />
            <p>Features:
            <ul>
              <li>A Tech-blog application design for tech enthusiasts to post and discuss tech topics. The application has full CRUD functionality, password encryption and protected sessions. Users can post, update, comment on, edit and delete posts. Handlebars and animate.style was used for the front end. The user will be required to sign up for initial use and login thereafter. If user isn't signed in, posts can only be viewed.</li>
            </ul>
            <ul>
              <li>Built with: Node.js, Express.js, Sequelize, Bcrypt, Handlebars, MVC, MySQL, Express Session, Animate.style</li>  
            </ul>
            </p>
            <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/vithursan6/tech-blog")}>https://github.com/vithursan6/tech-blog</a>
            <br />
            <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://glacial-brushlands-88300.herokuapp.com/login")}>https://glacial-brushlands-88300.herokuapp.com/login</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Tech Blog",
              },
            },
          });

    }

    const popupboxConfigTechblog = {
        titleBar: {
            enable: true,
            text: "Tech Blog"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //SOCIALBLOG
    const openPopupboxSocialblog = () => {
        const content = (
        <>
            <img className='portfolio-image-popupbox' src={socialBlog} alt="socialblog app" />
            <p>Features:
            <ul>
              <li>A mySQL blog application designed to allow users to read, browse, and post blog entries to application. The user may also comment on any posted entry. The application uses the Model-view-controller structure, provides a secure password protected session. Passwords are hashsed upon creation for security. The User may view posts without an login credentials, but to create, delete, edit and comment, credentials are required.</li>
            </ul>
            <ul>
              <li>Built with: Node.js, Express.js, Sequelize, REST, Bcrypt, Handlebars, MVC, MySQL, Express Session, User Input Filter Animate.style</li>  
            </ul>
            </p>
            <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/thumbolinat/project-2-blog")}>https://github.com/thumbolinat/project-2-blog</a>
            <br />
            <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://portside.herokuapp.com/")}>https://portside.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Social Blog",
              },
            },
          });

    }

    const popupboxConfigSocialblog = {
        titleBar: {
            enable: true,
            text: "Social Blog"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

   //TEAM
   const openPopupboxWork = () => {
    const content = (
    <>
        <img className='portfolio-image-popupbox' src={work} alt="Work Scheduler app" />
        <p>Features:
            <ul>
              <li>The app has 9 time slots ranging from 9am to 5pm. The current date is displayed at the top of page. The user can click in the text are next to corresponding time and input their tasks to complete. The app stores user data in local storage once save button is clicked. When the current time is greater than the time corresponding to a task, the text area field is greyed out. When the current time is equal to the the time corresponding to a task, the text field is highlighted in red. If current time is less than the time corresponding to a task, the text field will remain green. The page will keep data stored in localStorage and retrieve most recent saved data if refreshed.</li>
            </ul>
        </p>
        <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/Vithursan6/work-scheduler")}>https://github.com/Vithursan6/work-scheduler</a>
        <br />
        <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://vithursan6.github.io/work-scheduler/")}>https://vithursan6.github.io/work-scheduler/</a>
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Work Day Scheduler",
          },
        },
      });

    }

    const popupboxConfigWork = {
        titleBar: {
            enable: true,
            text: "Work Day Scheduler "
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

   //CRYPTO
   const openPopupboxCrypto = () => {
    const content = (
    <>
        <img className='portfolio-image-popupbox' src={crypto} alt="Crypto Dashboard app" />
        <p>Features:
            <ul>
              <li>Two submit forms to receive user input (i.e. user can enter the crytocurrency name)
                  API call for market information to display daily prices, trading volumes, and trends
                  API call to display relevant news articles i.e. specific country supporting crypto</li>
            </ul>
            <ul>
              <li>Built with: HTML, Bootstrap, CSS, Javascript, CoinGecko API, News API</li>  
            </ul>
        </p>
        <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/Vithursan6/crypto-dash")}>https://github.com/Vithursan6/crypto-dash</a>
        <br />
        <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://vithursan6.github.io/crypto-dash/")}>https://vithursan6.github.io/crypto-dash/</a>
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Crypto Dashboard",
          },
        },
      });

    }

    const popupboxConfigCrypto = {
        titleBar: {
            enable: true,
            text: "Crypto Dashboard"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

   //NOTETAKER
   const openPopupboxNotetaker = () => {
    const content = (
    <>
        <img className='portfolio-image-popupbox' src={noteTaker} alt="Note Taker app" />
        <p>Features:
            <ul>
              <li>An express note taking application that allows the user to create and save notes. The application also allows the user to delete note.</li>
            </ul>
            <ul>
              <li>Built with: Express, Node.js</li>  
            </ul>
        </p>
        <b>GitHub: </b> <a className='hyper-link' onClick={() => window.open("https://github.com/Vithursan6/Note-taker")}>https://github.com/Vithursan6/Note-taker</a>
        <br />
        <b>Link to App: </b> <a className='hyper-link' onClick={() => window.open("https://sleepy-escarpment-11517.herokuapp.com/")}>https://sleepy-escarpment-11517.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Note Taker",
          },
        },
      });

    }

    const popupboxConfigNotetaker = {
        titleBar: {
            enable: true,
            text: "Note Taker"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



  return (
    <div id='portfolio' className='portfolio-wrapper'>
        <div className='container'>
            <h1 className='text-uppercase text-center py5'>projects</h1>


            <div className='image-box-wrapper row justify-content-center'>
                <div className='animate__animated animate__zoomIn animate__slow portfolio-image-box' onClick={openPopupboxWeather}>
                    <img className='portfolio-image' src={weather} alt="weather app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>



                <div className='animate__animated animate__zoomIn animate__slow portfolio-image-box'  onClick={openPopupboxTechblog}>
                    <img className='portfolio-image' src={techBlog} alt="tech blog app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>



                <div className='animate__animated animate__zoomIn animate__slow portfolio-image-box' onClick={openPopupboxSocialblog}>
                    <img className='portfolio-image' src={socialBlog} alt="social blogging app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>


                <div className='animate__animated animate__zoomIn animate__slow portfolio-image-box' onClick={openPopupboxWork}>
                    <img className='portfolio-image' src={work} alt="Work app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>



                <div className='animate__animated animate__zoomIn animate__slow portfolio-image-box' onClick={openPopupboxCrypto}>
                    <img className='portfolio-image' src={crypto} alt="crypto dashboard app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>


                <div className='animate__animated animate__zoomIn animate__slow portfolio-image-box' onClick={openPopupboxNotetaker}>
                    <img className='portfolio-image' src={noteTaker} alt="note taker app" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
            </div>

        </div>
        <PopupboxContainer {...popupboxConfigWeather} />
        <PopupboxContainer {...popupboxConfigTechblog} />
        <PopupboxContainer {...popupboxConfigSocialblog} />
        <PopupboxContainer {...popupboxConfigWork} />
        <PopupboxContainer {...popupboxConfigCrypto} />
        <PopupboxContainer {...popupboxConfigNotetaker} />

    </div>
  )
}

export default Portfolio
