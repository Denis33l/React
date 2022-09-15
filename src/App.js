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

import Discription from './components/Discription';


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


  const [text, setText] = useState([
    { id: 1, image: BigMark, name: 'Andre Mark', profession: 'Traditional/Digital Artist passionate about Art', contact: 'connect', clock: '10-20 hrs/week', available: 'Available', location: 'Moscow, Russia', activity: 'Joined 5 months ago' },
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

        {text.map(text =>
            <Discription text={text} key={text.id} />
          )}

      </div>

    </div>
  );
}

export default App;
