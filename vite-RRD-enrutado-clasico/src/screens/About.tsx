import React from 'react'
import { useNavigate } from 'react-router-dom';

export const About = () => {
    const navigate = useNavigate();
    return (
      <div>
          <h1>About</h1>
          <button onClick={()=>navigate("/")}>Home Screen</button>
      </div>
    )
}
