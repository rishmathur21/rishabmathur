import React, { Component } from 'react';

class Home extends Component {   
   render() {
      if (this.props.data) {
         var name = this.props.data.name;
      }

      return (
         <div>
            <header id="home">
               <div className="row banner">
                  <div className="banner-text">
                     <h1>{name}</h1> {/* TODO: what was ' className="responsive-headline"' for??? */}
                     <h3> Developer | Musician | Random Project Doer</h3>
                     <hr />
                  </div>
               </div>

               {/* TODO: put row of icons tabla, bicycle etc. */}

               <p className="scrolldown">
                  <a className="smoothscroll" href="#journal"><i className="icon-down-circle"></i></a>
               </p>

            </header>
         </div>
      );
   }
}

export default Home;
