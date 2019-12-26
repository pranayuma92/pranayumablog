import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	state = {}

	removeHtmlTag = (html) => {
		const result = html.replace(/<[^>]+>/g, '');
		return result.substring(0, 250);
	}

	render(){

		const { blogs } = this.props;

		return (
			<div className="fade-in">
				<header className="bg-white home container">
			      <div className="container text-center">
			        <h1>Hello World!</h1>
			        <p className="lead">I am Pandu Pranayuma</p>
			      </div>
			    </header>
			    <div className="container">
			    	<div id="masonry">
			    		{ blogs && blogs.map( item => (
			    			<Link to={`/blog/${item.id}`} >
					    		<div className="card fade-in" key={item.id}>
					    	  		<img className="card-img-top" src="https://place-hold.it/300x150" alt="Card image cap" />
							  		<div className="card-body">
							    		<h3 className="card-title">{item.title}</h3>
							    		<h6 className="card-subtitle mb-2 text-muted">Category</h6>
							    		<p className="card-text" dangerouslySetInnerHTML={{__html:`${this.removeHtmlTag(item.content)}...`}}></p>
							  		</div>
								</div>
							</Link>
			    		))}

					</div>
			    </div>
		    </div>
		)
	}
}

const mapStateToProps = (state) => ({
	blogs : state.firestore.ordered.blogs
})

export default compose(
		connect(mapStateToProps),
		firestoreConnect([
			{ collection:'blogs', orderBy: ['createdAt', 'desc'] }
		])
	)
(HomePage);