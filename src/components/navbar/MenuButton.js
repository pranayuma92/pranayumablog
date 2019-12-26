import React from 'react';

const MenuButton = (props) => {
	let active = '';

	if(props.menuVisibility){
		active = 'active';
	}

	return(
		<div onClick={props.openMenu} className={`button_container ${active}`} id="toggle">
		  <span className="top"></span>
		  <span className="middle"></span>
		  <span className="bottom"></span>
		</div>
	)
}

export default MenuButton;