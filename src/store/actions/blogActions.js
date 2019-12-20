const addNewBlog = post => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('blogs').add({
			...post,
			createdAt: new Date(),
			postedBy: 'Pandu Pranayuma'
		}).then(() => {
			dispatch({ type: 'ADD_NEW_BLOG', post })
		}).catch(err => {
			dispatch({ type: 'ADD_NEW_BLOG_ERR', err })
		})
	}
}

const deleteBlog = id => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('blogs').doc(id).delete()
		.then(() => {
			dispatch({ type: 'DELETE_BLOG', id })
		})
		.catch(err => {
			dispatch({ type: 'DELETE_BLOG_ERR', err })
		})
	}
}

export { addNewBlog, deleteBlog }