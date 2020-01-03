import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import CreateBlog from './components/blog/CreateBlog';
import EditBlog from './components/blog/EditBlog';
import BlogDetails from './components/blog/BlogDetails';
import HomePage from './components/site/HomePage';
import NotFound from './components/site/NotFound';
import SignIn from './components/site/SignIn';
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
          <Route path='/edit/:id' component={EditBlog}/>
    			<Route path='/create' component={CreateBlog}/>
          <Route path='/signin' component={SignIn}/>
          <Route component={NotFound}/>
    		</Switch>
        <Footer />
     	</Router>
    </div>
  );
}

export default App;
