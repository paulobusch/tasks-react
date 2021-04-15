import './content.css';

import React from 'react';

function Content(props) {
  return (
    <main className="content">
      { props.children }
    </main>
  );
}

export default Content;
