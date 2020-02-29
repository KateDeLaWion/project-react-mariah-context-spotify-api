
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import Home from './components/Home' ;
import Bio from './components/Bio' ;
import Beginning from './components/Beginning' ;
import Christmas from './components/Christmas' ;
import Gallery from './components/Gallery' ;
import Awards from './components/Awards' ;
import Dashboard from './components/Dashboard' ;

import './App.css';
import { UserProvider } from './components/userContext';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {}, can work too. 
      mydata: [],
      employeeData: []
    };
  }


  setEmployeeData() {
    this.setState({
      employeeData: this.state.mydata.data
    })

    // console.log(this.state.employeeData);
  }



  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((anythingone) => {
        return anythingone.json();
      })
      .then((theirdata) => {
        console.log(theirdata);
              
        this.setState({
          mydata: theirdata
        })

        this.setEmployeeData();
      })
  }



  render() {
    console.log(this.state.employeeData)
    return(
      <div className="App">
        <UserProvider value = {this.state.employeeData}>

          <Router>

            <nav>   
              <Link to="/Home">Home</Link> |
              <Link to="/Bio">Bio</Link> |
              <Link to="/Beginning">Beginning</Link> |
              <Link to="/Christmas">Christmas</Link> |
              <Link to="/Gallery">Gallery</Link> |
              <Link to="/Awards">Awards</Link> |
              <Link to="/Dashboard">Dashboard</Link> 
            </nav>
 
            <Switch>  
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/Bio">
                <Bio />
              </Route>
              <Route exact path="/Beginning">
                <Beginning />
              </Route>
              <Route exact path="/Christmas">
                <Christmas />
              </Route>
              <Route exact path="/Gallery">
                <Gallery />
              </Route>
              <Route exact path="/Awards">
                <Awards />
              </Route>
              <Route exact path="/Dashboard">
                <Dashboard />
              </Route>            
            </Switch>

          </Router>

        </UserProvider>
      </div>
     )
    
  }
}



  









