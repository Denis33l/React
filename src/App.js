import React, { useState } from 'react';
import Postitem from './components/Postitem';
import './styles/App.css'
import './styles/Header.css'
import './styles/Leftmenu.css'
import './styles/Postitem.css'
import './styles/Input.css'

import ImageMark from "../src/img/post/mark.png";
import ImageAttila from "../src/img/post/attila.png";
import ImageSerena from "../src/img/post/Serena.png";
import ImageNicholas from "../src/img/post/nichilas.png";

import ImageClock from "../src/img/post/clock.png"
import ImageZap from "../src/img/post/zap.png"

import Map from "../src/img/post/map.png"

import Header from './components/Header';

import Leftmenu from './components/Leftmenu';

import Search from "../src/img/leftmenu/Search.png"
import Chat from "../src/img/leftmenu/Chat.png"
import Edit from "../src/img/leftmenu/Edit.png"
import Ticket from "../src/img/leftmenu/Ticket.png"
import Home from "../src/img/leftmenu/Home.png"

import BigMark from "../src/img/postitem/mark.png"

import Description from './components/Description';
import "./styles/Description.css";

import About from './components/About';
import "./styles/About.css";

import emblem from "../src/img/postitem/emblem.png"
import emblem2 from "../src/img/postitem/emblem2.png"
import google from "../src/img/postitem/google.png"
import "./styles/Education.css"

import "./styles/Experience.css"



function App() {

  const [posts, setPosts] = useState([
    { id: 1, isVerified: true, mapMini: Map, Imagezap: ImageZap, Imageclock: ImageClock, image: ImageMark, name: 'Andre Mark', location: 'Moscow, Russia', profession: 'Marketing Intern - ', abilities: ' Google', clock: '10-20 hrs/week', available: 'Available' },
    { id: 2, isVerified: false, mapMini: Map, Imagezap: ImageZap, Imageclock: ImageClock, image: ImageAttila, name: 'Attila A', location: 'Saint Petersburg, Russia', profession: 'Front-End Developer -', abilities: 'VTB', clock: '10-20 hrs/week', available: 'Available' },
    { id: 3, isVerified: false, mapMini: Map, Imagezap: ImageZap, Imageclock: ImageClock, image: ImageSerena, name: 'Serena M', location: 'Saint Petersburg, Russia', profession: 'Russian Translator -', abilities: 'Apple Russia', clock: '10-20 hrs/week', available: 'Unavailable' },
    { id: 4, isVerified: false, mapMini: Map, Imagezap: ImageZap, Imageclock: ImageClock, image: ImageNicholas, name: 'Nicholas G', location: 'Novosibirsk, Russia', profession: 'Content Writer -', abilities: 'Joy Radio', clock: '10-20 hrs/week', available: 'available' },
  ])

  const [items, setItems] = useState([
    { id: 1, itemText: 'Create', itemImage: Edit },
    { id: 2, itemText: 'Talents', itemImage: Search },
    { id: 3, itemText: 'Offers', itemImage: Ticket },
    { id: 4, itemText: 'Messenger', itemImage: Chat },
    { id: 5, itemText: 'Page', itemImage: Home },
  ])


  const [texts, setText] = useState([
    { id: 1, imageBig: BigMark, name: 'Andre Mark', profession: 'Traditional/Digital Artist passionate about Art', contact: 'Сonnect', clock: '10-20 hrs/week', available: 'Available', location: 'Moscow, Russia', activity: 'Joined 5 months ago' },
  ])

  return (
    <div className='App'>
      <Header />

      <div className="post__container">
        {/* <button>Create</button> */}
        <div className='leftmenu'>
          {items.map(item =>
            <Leftmenu item={item} key={item.id} />
          )}
        </div>




        <div className="post__line">
          <div className="post__input">
            <input className='post__input-name' type="search" placeholder="Search by name, skill, location, school" />
            <input className='post__input-filter' type="search" placeholder='Filter Search' />
          </div>
          {posts.map(post =>
            <Postitem post={post} key={post.id} />
          )}
        </div>

        <div className="all__background">
          <div className="description__background">
            {texts.map(text =>
              <Description text={text} key={text.id} />
            )}
          </div>

          <div className="container__description">
            
            <section className="about">
              <p className="title__color">About</p>
              <p className="about__text">
                I am a full-time student at Full Sail University to pursue a bachelor's degree in Computer Animation. I am a loving wife and fur mom.
                I have graduated from TVCC in the year of 2020 with an Associate's of Arts Degree. I graduated from Mabank High School in the year of 2018.
                I am very passionate in art and want to pursue it as a way of making a living for family. I am a hard worker whom is willing to do anything for my husband and my fur-daughter.
              </p>
            </section>

            <section className="education">
              <p className="title__color">Education</p>
              <div className="education__description">
                <img src={emblem} alt="Emblem" />
                <div className="education__university">
                  <p className="animation">Msc, Computer Animation</p>
                  <p className="location__universiry">University of London • Class of 2023</p>
                </div>
              </div>

              <div className="education__description">
                <img src={emblem2} alt="Emblem" />
                <div className="education__university">
                  <p className="animation">Bsc, Game Animation</p>
                  <p className="location__universiry">Saint Petersburg State University • Class of 2020</p>
                </div>
              </div>
            </section>

            <section className="experience">
              <p className="title__color">Experience</p>
              <div className="experience__description">
                <img src={google} alt="google" />
                <div className="education__university">
                  <p className="animation">Marketing Intern </p>
                  <p className="animation">Google • Los Angeles, USA (Remote)</p>
                  <p className="location__universiry">Sep 2021 - Present • 6 months</p>
                </div>
              </div>

              <p className='experience__subtitle'>• Increase user base on Instagram from 1500 followers to 2200 followers.</p>
              <p className='experience__subtitle'>• Create Reels and TikToks to engage students in events that reached over 31,000 views</p>
              <p className='experience__subtitle'>• Film and edit videos to enhance our social media presence and capture the student’s attention</p>

              <p className="experience__subtitle">Skills : Adobe Premiere Pro, Final Cut pro, Canva, and Short form editing for TikTok</p>

            </section>

          </div>
        </div>



      </div>

    </div>
  );
}

export default App;
