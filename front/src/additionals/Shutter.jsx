// Shutter.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/Shutter.css';

const Shutter = ({ to, children }) => {
  const [shutter, setShutter] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setShutter(true);
    setTimeout(() => {
      navigate(to);
    }, 1000); // Adjust the duration to match the total animation time
  };

  return (
    <>
      <Link to={to} onClick={handleClick}>
        {children}
      </Link>
      <div className={`shutter ${shutter ? 'active' : ''}`}></div>
    </>
  );
};

export default Shutter;
