import React from "react";

const User = ({name}) => {
    
    let numberreverse = name.toLowerCase().split("").reverse().join('');

    if (name.includes('e')) {
       return  <span>It’s Premium User! Welcome, {name}!</span>
    } 
    
    else if (name.length > 5) {
        
        return <span> {name.substr(0,5) + '...'}</span>
    }

    else if (name.length !== numberreverse){

        return <span className="name--highlighted"> {name }</span>
    }
    
    else {
        return <span>It’s user {name}</span>
    }

    
}
export default User;


