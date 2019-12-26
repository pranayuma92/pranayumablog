import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewBlog } from '../../store/actions/blogActions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class CreateBlog extends Component {
	state = {
		title: '',
		content : ''
	}

	handleChange = (value) => {
    	this.setState({ content: value })
  	}

  	handleInput = (ev) => {
  		this.setState({ [ev.target.id] : ev.target.value })
  	}

  	handlePublish = () => {
		this.props.addNewBlog(this.state)
		//console.log('data', this.state)
	}

	render(){
		console.log(this.props)
		const modules = {
			toolbar: [
				[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			    [{ 'font': [] }],
			    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
			    [{ 'align': [] }],
			    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
			    ['link', 'image', 'video'],
			    ['clean']
			],
			clipboard: {
			    matchVisual: false,
			}
		}

		const formats = [
		  'header', 'font', 'size',
		  'bold', 'italic', 'underline', 'strike', 'blockquote',
		  'list', 'bullet', 'indent',
		  'link', 'image', 'video'
		]

		return (
			<div className="fade-in">
				<header className="bg-white home container">
			      	<div className="container text-center">
			        	<h1>Create New Blog</h1>
			      	</div>
			    </header>
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<input id="title" onChange={this.handleInput} className="form-control input-title" type="text" placeholder="Title..."/>
							<ReactQuill 
								value={this.state.content} 
								onChange={this.handleChange} 
								modules={modules} 
								formats={formats} 
								placeholder={'Content...'} />
						</div>
						<div className="col-md-4">
							<div className="card">
								<img className="card-img-top" src="https://place-hold.it/300x150" alt="Card image cap" />
							</div>
							<button onClick={this.handlePublish} className="btn btn-primary">Publish</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	addNewBlog : post => dispatch(addNewBlog(post))
})

export default connect(null, mapDispatchToProps)(CreateBlog);