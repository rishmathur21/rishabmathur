import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import BeenhereIcon from '@material-ui/icons/Beenhere';

import { Icon } from '@material-ui/core';

const MakeTimelineItem = (item) => {

  let contentStyling;
  let iconStyling;
  let contentArrowStyling;

  let IconItem = () => {
    switch (item.type) {
      case 'born':
        return <ChildFriendlyIcon />
      case 'move':
        return <CardTravelOutlinedIcon />
      case 'education':
        return <SchoolOutlinedIcon />
      case 'travel':
        return <FlightTakeoffOutlinedIcon />
      case 'work':
        return <WorkOutlinedIcon />
      case 'bike':
        return <DirectionsBikeIcon/>
      default:
        return <EmojiEmotionsIcon/>
    }
  };

  switch (item.type) {
    case 'born':
      contentStyling = { background: '#dbc91f', color: '#fff' };
      iconStyling = { background: '#dbc91f', color: '#fff' };
      contentArrowStyling = { borderRight: '7px solid #dbc91f' };
      break;
    case 'move':
      contentStyling = { background: '#34dbeb', color: '#fff' };
      iconStyling = { background: '#34dbeb', color: '#fff' };
      contentArrowStyling = { borderRight: '7px solid #34dbeb' };

      break;
    case 'education':
      contentStyling = { background: '#db676b', color: '#fff' };
      iconStyling = { background: '#db676b', color: '#fff' };
      contentArrowStyling = { borderRight: '7px solid #db676b' };

      break;
    case 'travel':
      contentStyling = { background: '#ba78c4', color: '#fff' };
      iconStyling = { background: '#ba78c4', color: '#fff' };
      contentArrowStyling = { borderRight: '7px solid #ba78c4' };

      break;
    case 'work':
      contentStyling = { background: '#86d173', color: '#fff' };
      iconStyling = { background: '#86d173', color: '#fff' };
      contentArrowStyling = { borderRight: '7px solid #86d173' };
      break;
    default: 
    // any randoms other stuff
      contentStyling = { background: '#e6bc5c', color: '#fff' };
      iconStyling = { background: '#e6bc5c', color: '#fff' };
      contentArrowStyling = { borderRight: '7px solid #e6bc5c' };
      break;
  }
  return (
    <VerticalTimelineElement
      iconStyle={iconStyling}
      contentStyle={contentStyling}
      contentArrowStyle={contentArrowStyling}
      date={item.date}
      key={item.event}
      icon={<IconItem />}
    >
      <h3 className="vertical-timeline-element-title">{item.event}</h3>
      <h4 className="vertical-timeline-element-location"> <LocationOnIcon />{item.location} </h4>
      <div className="vertical-timeline-element-description">
        {item.description}
      </div>

    </VerticalTimelineElement>
  )
}

const MakeTimeline = (items) =>
  items.map(item => {
    return MakeTimelineItem(item);
  });

class Timeline extends Component {
  render() {

    if (this.props.data) {
      this.timelineItems = MakeTimeline(this.props.data)
    }

    return (

      <VerticalTimeline
      // TODO: date = todays date
      >
        {this.timelineItems}
        <VerticalTimelineElement>
          <h3 className="vertical-timeline-element-title">Tomorrow</h3>
          <h4 className="vertical-timeline-element-location"> <LocationOnIcon />Unknown</h4>
          <div className="vertical-timeline-element-description">
            Hopefully doing something cool
          </div>

        </VerticalTimelineElement>

      </VerticalTimeline>

    )
  }
}

export default Timeline;