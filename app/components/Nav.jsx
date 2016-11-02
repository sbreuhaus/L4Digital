import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends Component{

  render(){
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>L4 Digital Weather App</li>
              <li>
                <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
              </li>
          </ul>

        </div>
      </div>
    );
  }
}
