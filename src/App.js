import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import CreateBlog from './components/blog/CreateBlog';
import BlogDetails from './components/blog/BlogDetails';
import HomePage from './components/site/HomePage';

function App() {
  return (
    <div className="App">
    	<Router>
     		<Navbar />
    		<Switch>
    			<Route exact path='/' component={HomePage}/>
    			<Route path='/blog/:id' component={BlogDetails}/>
    			<Route path='/create' component={CreateBlog}/>
    		</Switch>
     	</Router>
    </div>
  );
}

export default App;
