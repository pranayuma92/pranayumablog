import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
	let open = '';

	if(props.menuVisibility){
		open = 'open';
	}
	return (
       	<div className={ `overlay ${open}` } onMouseDown={props.handleMouseDown} id="overlay">
		  <nav className="overlay-menu">
		    <ul>
		      <li><Link to='/'>Home</Link></li>
		      <li><Link to='/create'>Create new blog</Link></li>
		      <li><a href="#work">Work</a></li>
		      <li><a href="#contact">Contact</a></li>
		    </ul>
		  </nav>
		</div>
	  
	)
}

export default Menu;