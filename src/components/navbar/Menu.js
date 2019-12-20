import React from 'react';

const Menu = (props) => {
	let open = '';

	if(props.menuVisibility){
		open = 'open';
	}
	return (
       	<div className={ `overlay ${open}` } onMouseDown={props.handleMouseDown} id="overlay">
		  <nav className="overlay-menu">
		    <ul>
		      <li><a href="#">Home</a></li>
		      <li><a href="#">About</a></li>
		      <li><a href="#">Work</a></li>
		      <li><a href="#">Contact</a></li>
		    </ul>
		  </nav>
		</div>
	  
	)
}

export default Menu;