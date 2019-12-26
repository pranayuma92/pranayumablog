import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewBlog } from '../../store/actions/blogActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import BlogListPlain from '../blog/BlogListPlain';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Dashboard extends Component {
	state = {
		title: 'this is title test by pandu',
		text: ''
	}

	handleTest = () => {
		this.props.addNewBlog(this.state)
	}

  	handleChange = (value) => {
    	this.setState({ text: value })
  	}

	render(){ 
		const { blogs } = this.props
		return(
			<>
			<div className="container">
				<BlogListPlain blogs={blogs} />
				<button onClick={this.handleTest}>Test</button>
			</div>
			<ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
                  <textarea>{this.state.text}</textarea>
			</>
		)
	}
}

const mapStateToProps = state => ({
	blogs : state.firestore.ordered.blogs
})

const mapDispatchToProps = dispatch => ({
	addNewBlog : post => dispatch(addNewBlog(post))
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection:'blogs', orderBy: ['createdAt', 'desc'] }
	])
)(Dashboard);