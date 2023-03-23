import '../App.css';
import React from 'react';

function Header() {
    return (
    <header className="App-header">
        <ul class= "header_nav">
            <li class="header__item"><a class="header__link" href=''>Home</a></li>
            <li class="header__item"><a class="header__link" href=''>About us</a></li>
            <li class="header__item"><a class="header__link" href=''>Contact</a></li>
        </ul>
    </header>
    );
  }
  
  export default Header;