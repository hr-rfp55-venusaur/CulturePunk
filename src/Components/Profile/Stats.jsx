import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

const Stats = ({ user }) => (
  <div className="stats">
    <div className="followers">
      <h5>
        {user.followers}
        <span> users are following </span>
        {user.name}
        <span>.</span>
      </h5>
    </div>
    <div className="following">
      <h5>
        {user.name}
        <span> is following </span>
        {user.following}
        <span> others.</span>
      </h5>
    </div>
  </div>
);

Stats.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default Stats;
