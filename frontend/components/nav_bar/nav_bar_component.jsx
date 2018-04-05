import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, login,logout,openModal }) => {

  const sessionLinks = () => (
    <header className='header'>
    <nav className="header_nav">
      <div className='left_nav'>

          <a href='#'><img src={staticAssets.logo} alt='logo'/>
          </a>
        <input className='search' type="text" placeholder=" Try Tokyo.."/>
      </div>
      <ul >
        <li><button
          onClick={() => openModal('login')}>Login
        </button></li>

        <li><button
          onClick={() => openModal('signup')}>Signup
        </button></li>

        <li><button
          onClick={ ()=>
            login({email: 'guest@castlebnb.com', password:'password',
               firstname:'future user', lastname:"guest"})
          }> demo
        </button></li>
      </ul>
    </nav>

    </header>


  );

  const personalGreeting = () => (
   <hgroup className="header-group">
     <h2 className="header-name">Hi, {currentUser.firstname}!</h2>
     <button className="header-button" onClick={logout}>Log Out</button>
   </hgroup>
 );

 return (
   currentUser ?
   personalGreeting(currentUser, logout) :
   sessionLinks()
 );


};
