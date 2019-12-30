import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import { LinkedIn, GitHub, Twitter } from '../Icons'

class Navbar extends Component {
	state = {
		visible: false
	}

	handleMouseDown = (e) => {
    	setTimeout(() => {
    		this.toggleMenu();
    		console.log("triggered");
    	}, 100)
    	e.stopPropagation();
  	}

	toggleMenu = () => {
		this.setState({ visible: !this.state.visible })
	}

	render(){
		return (
			<>
			<nav className="navbar navbar-expand-lg navbar-light bg-white">
				<div className="container">
			 		<div className="collapse navbar-collapse" id="navbarResponsive">
			          <ul className="navbar-nav ml-auto">
			            <li className="nav-item">
			              <a className="nav-link" href="https://Linkedin.com">
			              	<LinkedIn />
			              </a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link" href="https://github.com">
			              	<GitHub />
			              </a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link" href="https://twitter.com">
			              	<Twitter />
			              </a>
			            </li>
			          </ul>
			        </div>
			 	</div>
			</nav>
			<MenuButton openMenu={this.toggleMenu} menuVisibility={this.state.visible}/>
			<Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
			</>
		)
	}
}

export default Navbar;