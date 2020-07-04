import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Journal from './Components/Journal';
import About from './Components/About';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siteData: {}
    };
  }

  setSize() {
    $('header').css({ 'height': $(window).height() });
    $(window).on('resize', function () {

      $('header').css({ 'height': $(window).height() });
      $('body').css({ 'width': $(window).width() })
    });
  }

  smoothScroll() {
    $('.smoothscroll').on('click', function (e) {
      e.preventDefault();

      var target = this.hash,
        $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });
    });
  }



  // grab site data from json
  getSiteData() {
    $.ajax({
      url: process.env.PUBLIC_URL + '/siteData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ siteData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getSiteData();
    this.setSize();
    this.smoothScroll();
  }

  render() {

    return (
      <div className="App">
        <Navbar></Navbar>
        <Home data={this.state.siteData.main} />
        <Journal data={this.state.siteData.journal} />
        <About data={this.state.siteData.about} />

      </div >
    );
  }
}

export default App;
