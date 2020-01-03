import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
	const modules = {
		toolbar: [
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
		    [{ 'font': [] }],
		    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
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
	  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
	  'list', 'bullet', 'indent',
	  'link', 'image', 'video'
	]

	const handleBtn = () => {
		document.getElementById('choose').click();
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<input id="title" 
						value={props.title} 
						onChange={props.handleTitle} 
						className="form-control input-title" 
						type="text" 
						placeholder="Title..."/>
					<ReactQuill 
						value={props.content} 
						onChange={props.handleContent} 
						modules={modules} 
						formats={formats} 
						placeholder={'Content...'} />
				</div>
				<div className="col-md-4">
					<div className="card">
						<div onClick={handleBtn} className="img-placeholder">
							{ props.cover ? <img src={props.cover} /> : <div>Add Cover Image</div> }
						</div>
					</div>
					{ props.create && <button onClick={props.handlePublish} className="btn btn-primary">Publish</button> }
					{ props.edit && <button onClick={props.handlePublish} className="btn btn-primary">Update</button> }
				</div>
			</div>
			<input type="file" id="choose" onChange={props.handleCover} />
		</div>
	)
}

export default Editor; 