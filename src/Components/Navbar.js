import React, { Component } from 'react';

class Navbar extends Component {
   render() {
      return (
         <div>
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#journal">Journal</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
               </ul>

            </nav>
         </div>

      );
   }
}

export default Navbar;
