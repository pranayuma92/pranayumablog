import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({ [e.target.id] : e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.signIn(this.state)
	}

	render(){
		const { auth } = this.props;
		if(auth.uid) return <Redirect to='/dashboard' />
		return (
			<div className="fade-in">
				<header className="bg-white home container">
			      	<div className="container text-center">
			        	<h1>Sign In</h1>
			      	</div>
			    </header>
			    <div className="container"> 
					<form onSubmit={this.handleSubmit}>
					  <div className="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input onChange={this.handleChange} type="email" className="form-control" id="email"  placeholder="Enter email" />
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
					  </div>
					  <button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	authError : state.auth.authError,
	auth: state.firebase.auth
})

const mapDispatchToProps = (dispatch) => ({
	signIn : creds => dispatch(signIn(creds))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);