import React from 'react';

const NotFound = ({location}) => {
	console.log(location)
	return (
		<div className="blog-details fade-in">
			<header className="bg-white home container">
		      	<div className="container text-center">
		        	<h1>Page Not Found</h1>
		      	</div>
		    </header>
		    <div className="container text-center">
		    	<h2>Page "{location.pathname}" not found</h2>
		    </div>
	    </div>
	)
}

export default NotFound;