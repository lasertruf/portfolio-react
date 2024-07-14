import React from 'react';
import './meteorContainer.scss';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/instagram'
import 'react-social-icons/codepen'
import 'react-social-icons/youtube'
import 'react-social-icons/leetcode'
import 'react-social-icons/leetcode'

const Meteor = ({ left, delay, duration, url }) => {
  return (
    <div
      className="meteor flex items-center justify-center"
      style={{
        left: `${left}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
        {/* <SocialIcon style={{width:"50px", height:"50px"}}  bgColor="#2a2828" url={url}/> */}
    </div>
  );
};

export default Meteor;
