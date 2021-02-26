import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      {/* <h1>Realtime Team Calculator!</h1>
      <h2>Calculate and share it with the team!</h2>
      <h2>Press Send to share!</h2> */}
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently Solving:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;