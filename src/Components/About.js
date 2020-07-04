import React, { Component } from 'react';
import Timeline from './Util/Timeline';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = process.env.PUBLIC_URL + "/images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var timeline = this.props.data.timeline;

      }

      return (
         <section id="about">
            <div className="center-from-top">
               <div className="row">
                  <div className="four columns ">
                     <div className="bio">
                        <img className="profile-pic" src={profilepic} alt="Rishab Mathur" />
                        <h1> Hi I'm Rishab </h1>
                        <p> {bio} </p>
                     </div>
                  </div>

                  <div className="eight columns main-col">
                     <div className='timeline_container'>

                        <Timeline data={timeline}></Timeline>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;