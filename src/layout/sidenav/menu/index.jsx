import React from 'react';

export default function Menu(props) {
  return (
    <ul id="menu" className="nav flex-column">
      { props.children }
    </ul>
  );  
}
