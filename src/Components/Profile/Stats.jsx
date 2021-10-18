import React from 'react';

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

export default Stats;
