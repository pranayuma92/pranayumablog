import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';

class Navbar extends Component {
	state = {
		visible: false
	}

	toggleMenu = () => {
		this.setState({ visible: !this.state.visible })
	}

	handleMouseDown = (e) => {
    	console.log("clicked");
    	e.stopPropagation();
    	this.toggleMenu();
  	}

	render(){
		return (
			<>
			<nav className="navbar navbar-expand-lg navbar-light bg-white">
				<div className="container">
					<MenuButton handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
			 		<a className="navbar-brand" href="#">PranayumaBlog</a>
			 		<div className="collapse navbar-collapse" id="navbarResponsive">
			          <ul className="navbar-nav ml-auto">
			            <li className="nav-item">
			              <a className="nav-link" href="#">Dashboard</a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link" href="#">New Post</a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link" href="#">All Post</a>
			            </li>
			             <li className="nav-item">
			              <a className="nav-link" href="#">Contact</a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link" href="#">Logout</a>
			            </li>
			          </ul>
			        </div>
			 	</div>
			</nav>
			<Menu 
				handleMouseDown={this.handleMouseDown}
          		menuVisibility={this.state.visible} />
			</>
		)
	}
}

export default Navbar;