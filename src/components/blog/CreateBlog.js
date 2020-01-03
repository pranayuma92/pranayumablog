import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewBlog } from '../../store/actions/blogActions';
import Editor from './Editor';
import { Redirect } from 'react-router-dom';

class CreateBlog extends Component {
	state = {
		title: '',
		content : '',
		cover: ''
	}

	handleChange = (value) => {
    	this.setState({ content: value })
  	}

  	handleInput = (ev) => {
  		this.setState({ [ev.target.id] : ev.target.value })
  	}

  	handleImageChange = (e) => {
	    const self = this
	    e.preventDefault();
	    let file = e.target.files[0];
	    let reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = () => {
	      	self.setState({
	        	cover: reader.result
	      	});
	    };
	}

  	handlePublish = () => {
		this.props.addNewBlog(this.state, () => {
			this.props.history.push('/dashboard');
		})
	}

	render(){
		const { auth } = this.props;
		if(!auth.uid) return <Redirect to='/signin' />
		return (
			<div className="fade-in">
				<header className="bg-white home container">
			      	<div className="container text-center">
			        	<h1>Create New Blog</h1>
			      	</div>
			    </header>
				<Editor create
					content={this.state.content}
					cover={this.state.cover}
					handleContent={this.handleChange}
					handleCover={this.handleImageChange}
					handleTitle={this.handleInput}
					handlePublish={this.handlePublish} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.firebase.auth
})

const mapDispatchToProps = dispatch => ({
	addNewBlog : (post, callback) => dispatch(addNewBlog(post, callback))
})

export default connect(null, mapDispatchToProps)(CreateBlog);