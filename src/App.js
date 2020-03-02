
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
import Spotify from './components/Spotify' ;

import './App.css';
// import { UserProvider } from './components/userContext';

// const CLIENT_ID = '4816492c990440969a6ff4f1a973d7e0';
// const CLIENT_SECRET = 'fc67a2ff89c847dd9e2ec40d4d5b5859';

export default class App extends Component {
  

  render() {
    
    return(
      <div className="App">
        

          <Router>

            <nav>   
              <Link to="/Home">Home</Link> ***
              <Link to="/Bio">Biography</Link> ***
              <Link to="/Beginning">Beginning</Link> ***
              <Link to="/Christmas">Christmas</Link> ***
              <Link to="/Gallery">Gallery</Link> ***
              <Link to="/Awards">Awards</Link> ***
              <Link to="/Spotify">Spotify</Link> 
            </nav>
 
            <Switch>  
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/Bio">
                <Bio  dob={"March 27, 1969"} birthplace={"Huntington, New York"}/>
              </Route>
              <Route exact path="/Beginning">
                <Beginning />
              </Route>
              <Route exact path="/Christmas">
                <Christmas />
              </Route>
              <Route exact path="/Gallery">
                <Gallery 
                  imageUrl1={'https://pmcvariety.files.wordpress.com/2019/10/power-of-women-la-mariah-carey-2.jpg?w=1000'} 
                  imageUrl2={'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/01/08/1919506-831256042.jpeg?itok=vXlQuHEW'} 
                  imageUrl3={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtFn6F9VllaZEs4GJrW05oC9ygDk4g1eb1ZEwj_4F7T_IKq7qh'} 
                  imageUrl4={'https://media.pitchfork.com/photos/5d81ac66bd2bba0009fdf0a9/2:1/w_790/Mariah-Carey.jpg'}
                  imageUrl5={'https://www.dw.com/image/47282715_303.jpg'} 
                  imageUrl6={'https://us.hola.com/images/0257-0df4a5878868-e2b4035679cd-1000/horizontal-1150/mariah-carey.jpg'} 
                  imageUrl7={'https://imagevars.gulfnews.com/2019/10/07/191007-mariah-carey_16da53ca8c9_large.jpg'} 
                  />
              </Route>
              <Route exact path="/Awards">
                <Awards 
                 award1={"BEST NEW ARTIST  1990"} 
                 award2={"BEST POP VOCAL PERFORMANCE FEMALE  1990"} 
                 award3={"BEST CONTEMPORARY R&B ALBUM-The Emancipation of Mimi  2005"}
                 award4={"BEST R&B SONG-We Belong Together  2005 "} 
                 award5={"BEST FEMALE R&B VOCAL PERFORMANCE-We Belong Together  2005 "}
                />
              </Route>
              <Route exact path="/Spotify">
                <Spotify />
              </Route>            
            </Switch>

          </Router>

        
      </div>
     )
    
  }
}



  









