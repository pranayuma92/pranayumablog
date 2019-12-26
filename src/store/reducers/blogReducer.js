const initState = {}

const blogReducer = (state = initState, action) => {
	switch(action.type){
		case 'ADD_NEW_BLOG' :
			alert('Blog added');
			console.log('Blog added', action.post)
			return state;
		case 'ADD_NEW_BLOG_ERR' :
			console.log('Error while adding blog', action.err)
			return state;
		case 'DELETE_BLOG' :
			console.log('Blog deleted', action.id)
			return state;
		case 'DELETE_BLOG_ERR' :
			console.log('Error while deleting blog', action.err)
			return state;
		default: 
			return state;
	}
}

export default blogReducer;