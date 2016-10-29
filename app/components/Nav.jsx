import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends Component{

  render(){
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>L4 Digital Weather App</li>
          </ul>
        </div>
      </div>
    );
  }
}

// onSearch(e){
//   e.preventDefault();
//
//   let location = this.refs.search.value;
//   let encodedLocation = encodeURIComponent(location);
//
//   if(location.length > 0){ //only trigger search if there is a location typed in the input field
//     this.refs.search.value = '';
//     window.location.hash = '#/?location=' + encodedLocation;
//   }
// }



// <li>
//   <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
// </li>
// <li>
//   <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
// </li>
// <li>
//   <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
// </li>
