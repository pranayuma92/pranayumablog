import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBlog } from '../../store/actions/blogActions';
import Modal from '../Modal';

class BlogListPlain extends Component {
	state = {
		visible: 10,
		isShowing: false,
		deletedID: ''
	}

	ModalHandler = () => {
        this.setState({ isShowing: !this.state.isShowing });
    }

	ModalConfirm = () => {
		this.props.deleteBlog(this.state.deletedID);
		setTimeout(() => {
			this.ModalHandler();
		}, 1000)
	}

	handleDelete = id => {
		this.setState({ deletedID : id });
		this.ModalHandler();
	}

	loadMore = () => {
	    this.setState((prev) => {
	      	return {visible: prev.visible + 10};
	    });
	}

	render(){
		const { blogs } = this.props;
		if( blogs ){			
			return (
				<div className="blog-list-plain">
					<ul className="list-group"> 
						{ blogs.slice(0, this.state.visible).map( item => (
							<li key={ item.id } className="list-group-item fade-in" >
								<p>{ item.title }</p>
								<div>
									<span>Edit</span>
									<span onClick={() => this.handleDelete(item.id)}>Delete</span>
									<span>Move to draft</span>
								</div>
							</li>
						)) }
					</ul>
					{ this.state.visible < blogs.length &&
			            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
			        }
					<Modal
	                    className="modal"
	                    show={this.state.isShowing}
	                    close={this.ModalHandler}
	                    confirm={this.ModalConfirm} 
	                    title="Confirm delete">
	                       Are you sure delete this post?
	                </Modal>	
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