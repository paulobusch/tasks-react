import './menu-item.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuItem(props) {
  return (
    <li className="nav-item">
      <NavLink to={ props.to } className="nav-link" activeClassName="active">
        <i className={ props.icon }></i>
        { props.children }
      </NavLink>
    </li>
  );
}
