import React from 'react';
import './Person.css';

const Person = (props) => {
    

    return (
    
      
      <div>
        <img src={props.imgSrc} alt=""/>
        <p>
          <span className="label"> Name : </span>
          {props.fullName}
        </p>
        <p>     
          <span className="label"> lastname : </span>
          {props.lastName}
        </p>
        <p>   
          <span className="label"> Bio : </span>
          {props.bio}
        </p>

        
      </div>
    
  );
}


export default Person

