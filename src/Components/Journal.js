import React, { Component } from 'react';
import ScrollingMenu from './Util/ScrollingMenu'

class Journal extends Component {
  render() {

    if (this.props.data) {
      var writingItems = this.props.data.writing;
      var otherItems = this.props.data.other;
    };

    return (
      <section id="journal">
        <div className="row">
          <h1> on my mind</h1>
            <ScrollingMenu data={writingItems} />

          <br></br> {/* TODO: use padding/margins */}

          <h1> random stuff</h1>
          <div>
            <ScrollingMenu data={otherItems} />
          </div>
        </div>
      </section>
    );
  }
}

export default Journal;
