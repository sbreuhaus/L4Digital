import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
