import React from 'react'
import { UserConsumer } from './userContext'

export default function Employee() {

    return (   
        <UserConsumer>
        {

            (anyname) => { return <div> 
                                     
                        
           { anyname.map(same => {
          return <div > 
            <h2>{same.employee_name}</h2>
            <h2>{same.employee_salary}</h2>
            <h2>{same.employee_age}</h2>  
                <br/>
                 </div>
                                   })} 

                                 </div> }          
                     
        }
        </UserConsumer>       
            )

}
