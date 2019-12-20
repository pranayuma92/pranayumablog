import React, { Component } from 'react'

class HomePage extends Component {
	state = {
		htext: [
			{ u : "Hello World!", d : "Pandu Pranayuma personal blog"},
			{ u : "Whazzup!", d : "How's your day? Having a good time?"},
			{ u : "Don't code today", d : "If you can't debug tomorrow"},
			{ u : "Don't tell people your plans", d : "Show them your results"},
			{ u : "Give a man a program, frustrate him for a day", d : "Teach a man to program, frustrate him for a lifetime."},
			{ u : "It’s not a bug", d : "It’s an undocumented feature"},
			{ u : "Programming isn't about what you know", d : "It's about what you can figure out"},
			{ u : "Fix the cause", d : "Not the symptom"},
		]
	}

	render(){
		const { htext } = this.state;
		const random = htext[Math.floor(Math.random()*htext.length)];

		const htmlString= "<div><h1>Hello World</h1>\n<p>It's me, Mario</p></div>";
		const stripedHtml = htmlString.replace(/<[^>]+>/g, '');

		console.log(stripedHtml);
		return (
			<>
			<header className="bg-primary text-white home bg-img container">
		      <div className="container text-center">
		        <h1>{random.u}</h1>
		        <p className="lead">{random.d}</p>
		      </div>
		    </header>
		    <div className="container">
		    	<div id="masonry">
			    	<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">
					    	when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
					    </p>
					  </div>
					</div>

					<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">
					    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					    </p>
					  </div>
					</div>

					<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">
					    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					    </p>
					  </div>
					</div>

					<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">
					    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					    </p>
					  </div>
					</div>

					<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">
					    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					    </p>
					  </div>
					</div>

					<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">
					    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					    </p>
					  </div>
					</div>

					<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">
					    	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
					    </p>
					  </div>
					</div>
				</div>
		    </div>
		    </>
		)
	}
}

export default HomePage;