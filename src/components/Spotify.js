import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes, mariaID } from "../config_example";
import hash from "./hash";
import logo from "../logo.svg";
import "../App.css";

import ArtistAlbum from './ArtistAlbum';
import { UserProvider } from './userContext';



export default class Spotify extends Component {
    constructor() {
    super();
    
    this.state = {
      data: {},
      items:[]
    }
    // this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getArtistAlbums(_token);
    }
  } 

  getArtistAlbums(token) {
    // Make a call using the token
    $.ajax({
      
      url: `https://api.spotify.com/v1/artists/${mariaID}/albums?include_groups=album&country=us` ,
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
       // console.log(data.items);
        this.setState({
          data: data,
          items: data.items

        });

      }
    });
  }

  render() {

    console.log(this.state.items);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && (
          
             <UserProvider value = {this.state.items}>
            {/* <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.progress_ms}
            /> */}

            <ArtistAlbum />

            </UserProvider>

          )}
        </header>
      </div>
    );
  }
}



