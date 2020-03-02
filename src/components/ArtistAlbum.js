import React from "react";
import { UserConsumer } from './userContext'
//import "./ArtistAlbum.css";


export default function ArtistAlbum() {
    return (
        <div>
            
            
             <UserConsumer>
            {
                (data) => {

                
                    console.log(data);
                    return <div>
                        
                        {
            data.map(artistAlbum => {
          return <div > 
            <h2>{artistAlbum.name}</h2>
            <h2>{artistAlbum.release_date}</h2>
              
                <br/>
           </div>
        })
      }            
                    </div>
                }
            }
         
            </UserConsumer>

       
        </div>
    )
}