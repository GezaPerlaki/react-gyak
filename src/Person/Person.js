import React from "react";

const person = (props) => {
    return(  
      <div>
          <p>
              A nevem: {props.name}. A korom: {props.age}
          </p>
          <p>{props.children}</p>
      </div>  
    );
}

export default person;