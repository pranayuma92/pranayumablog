const addNewBlog = (post, callback) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('blogs').add({
			...post,
			createdAt: new Date(),
			postedBy: 'Pandu Pranayuma'
		}).then(() => {
			dispatch({ type: 'ADD_NEW_BLOG', post })
		}).then(() => {
			callback()
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

const updateBlog = item => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('blogs').doc(item.id).update({
			title: item.title,
			content: item.content,
			cover: item.cover
		})
		.then(() => {
			dispatch({ type: 'UPDATE_BLOG', item })
		})
		.catch(err => {
			dispatch({ type: 'UPDATE_BLOG_ERR', err })
		})
	}
}

export { addNewBlog, deleteBlog, updateBlog }