import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewBlog } from '../../store/actions/blogActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import BlogListPlain from '../blog/BlogListPlain';

class Dashboard extends Component {

	render(){ 
		const { blogs } = this.props
		return(
			<div className="fade-in">
				<header className="bg-white home container">
			      <div className="container text-center">
			        <h1>Dashboard</h1>
			      </div>
			    </header>
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<BlogListPlain blogs={blogs} />
						</div>
						<div className="col-md-4">
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	blogs : state.firestore.ordered.blogs,
})

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection:'blogs', orderBy: ['createdAt', 'desc'] }
	])
)(Dashboard);