import './header.css';

import React from 'react';

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary shadow">
        <a className="navbar-brand" href="/">
          <img src="images/tasks-48.png" width="30" height="30" className="d-inline-block align-top" alt="tasks"/>
          Tasks
        </a>
        <i onClick={ props.logout } id="logout" title="Sair" className="fas fa-sign-out-alt"></i>
      </nav>
    </header>
  );
}

export default Header;
