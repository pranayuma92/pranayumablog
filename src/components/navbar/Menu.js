import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInMenu = (props) => {
	return (
		<ul>
	      <li><Link to='/'>Home</Link></li>
	      <li><Link to='/create'>Create new blog</Link></li>
	      <li><Link to='/dashboard'>Dashboard</Link></li>
	      <li><a href="#" onClick={props.action} >Sign Out</a></li>
	    </ul>
	)
}

const SignOutMenu = () => {
	return (
		<ul>
	      <li><Link to='/'>Home</Link></li>
	      <li><a href="#contact">Contact</a></li>
	      <li><Link to='/signin'>Sign In</Link></li>
	    </ul>
	)
}

const Menu = (props) => {
	const { auth, signOut } = props;

	const links = auth.uid ? <SignInMenu action={signOut}/> : <SignOutMenu />;
	let open = '';

	if(props.menuVisibility){
		open = 'open';
	}

	return (
       	<div className={ `overlay ${open}` } onMouseDown={props.handleMouseDown} id="overlay">
		  <nav className="overlay-menu">
		    { links }
		  </nav>
		</div>
	  
	)
}

const mapStateToProps = state => ({
	auth: state.firebase.auth
})

const mapDispathToProps = dispatch => ({
	signOut : () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispathToProps)(Menu);