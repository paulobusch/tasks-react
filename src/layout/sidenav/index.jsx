import './sidenav.css';

import React from 'react';
import Menu from './menu';
import MenuItem from './menu-item';

function Sidenav() {
  return (
    <nav className="sidenav col-md-2 p-0 d-none d-md-block bg-light sidebar shadow">
      <div className="sidebar-sticky">
        <Menu>
          <MenuItem to="/dashboard" icon="fas fa-home">Dashboard</MenuItem>
          <MenuItem to="/ranking" icon="fas fa-crosshairs">Ranking</MenuItem>
          <MenuItem to="/tasks" icon="fas fa-tasks">Tarefas</MenuItem>
          <MenuItem to="/types" icon="fas fa-layer-group">Tipos</MenuItem>
          <MenuItem to="/projects" icon="fas fa-sitemap">Projetos</MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Sidenav;
