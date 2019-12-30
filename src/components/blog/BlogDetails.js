import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const BlogDetails = (props) => {
	console.log(props)
	const { blog } = props;
	return (
		<div className="blog-details fade-in">
			<header className="bg-white home container">
		      	<div className="container text-center">
		        	<h1>{ blog && blog.title }</h1>
		      	</div>
		    </header>
		    <div className="container">
		    	<article dangerouslySetInnerHTML={{__html: blog && blog.content }}></article>
		    </div>
	    </div>
	)
}

const mapStateToProps = (state, props) => {
	const id = props.match.params.id;
	const blogs = state.firestore.data.blogs;
	const blog = blogs ? blogs[id] : null;
	return {
		blog: blog
	}

}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection:'blogs' }
	])
)(BlogDetails);