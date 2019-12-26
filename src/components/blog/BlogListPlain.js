import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBlog } from '../../store/actions/blogActions';

class BlogListPlain extends Component {
	state = {
		visible: 10
	}

	handleDelete = id => {
		this.props.deleteBlog(id);
	}

	loadMore = () => {
	    this.setState((prev) => {
	      	return {visible: prev.visible + 10};
	    });
	 }

	render(){
		const { blogs } = this.props;
		console.log(this.props)		
		if( blogs ){	
			return (
				<div className="blog-list-plain">
					<ul className="list-group"> 
						{ blogs.slice(0, this.state.visible).map( item => (
							<li key={ item.id } className="list-group-item fade-in" >
								{ item.title }
							</li>
						)) }
					</ul>
					{ this.state.visible < blogs.length &&
			            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
			        }
				</div>	
			)
		} else {
			return (
				<p>Loading post...</p>
			)
		}
	}
}

const mapDispatchToProps = dispatch => ({
	deleteBlog : id => dispatch(deleteBlog(id))
})

export default connect(null, mapDispatchToProps)(BlogListPlain);