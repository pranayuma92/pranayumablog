import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import CreateBlog from './components/blog/CreateBlog';
import BlogDetails from './components/blog/BlogDetails';
import HomePage from './components/site/HomePage';
import NotFound from './components/site/NotFound';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    	<Router>
     		<Navbar />
    		<Switch>
    			<Route exact path='/' component={HomePage}/>
    			<Route path='/dashboard' component={Dashboard}/>
    			<Route path='/blog/:id' component={BlogDetails}/>
    			<Route path='/create' component={CreateBlog}/>
          <Route component={NotFound}/>
    		</Switch>
     	</Router>
    </div>
  );
}

export default App;
