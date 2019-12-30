import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import BlogListPlain from '../blog/BlogListPlain';

const Dashboard = (props) =>{ 
	const { blogs } = props;
	let count = '0';

	if(blogs){
		count = blogs.length;
	}

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
						<div className="card" >
						 	<div class="card-body">
							    <h5 class="card-title">published Posts</h5>
							    <p className="card-text">You have {count} published posts</p>
							    <Link to="/create" className="btn btn-primary">Create New</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
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