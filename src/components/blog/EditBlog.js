import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Editor from './Editor';
import { updateBlog } from '../../store/actions/blogActions';
import { Redirect } from 'react-router-dom';

class EditBlog extends Component {

	state = {
		id: this.props.match.params.id,
		title: this.props.blog.title,
		content : this.props.blog.content,
		cover : this.props.blog.cover
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

  	handleUpdate = () => {
		this.props.updateBlog(this.state, () => {
			this.props.history.push('/dashboard');
		})
	}

	render(){
		const { auth } = this.props;
		if(!auth.uid) return <Redirect to='/signin' />
		return(
			<div className="fade-in">
				<header className="bg-white home container">
			      	<div className="container text-center">
			        	<h1>Edit Blog</h1>
			      	</div>
			    </header>
				<Editor edit
					content={this.state.content}
					cover={this.state.cover}
					title={this.state.title}
					handleContent={this.handleChange}
					handleCover={this.handleImageChange}
					handleTitle={this.handleInput}
					handlePublish={this.handleUpdate} />
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	const id = props.match.params.id;
	const blogs = state.firestore.data.blogs;
	const blog = blogs ? blogs[id] : null;
	return {
		blog: blog,
		auth: state.firebase.auth
	}

}

const mapDispatchToProps = (dispatch) => ({
	updateBlog : (item, callback) => dispatch(updateBlog(item, callback))
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection:'blogs' }
	])
)(EditBlog);