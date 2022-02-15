import React from 'react';

const ComposableUser = ({children}) => {
    
    let numberreverse = children.toLowerCase().split("").reverse().join('');
    
    console.log(numberreverse);

    if (children.includes('e')) {
       return  <span>It’s Premium User! Welcome, {children}!</span>
    } 
    
    else if (children.length > 5) {
        
        return <span> {children.substr(0,5) + '...'}</span>
    }

    else if (children.length !== numberreverse){

        return <span className="name--highlighted"> {children }</span>
    }
    
    else {
        return <span>It’s user {children}</span>
    }

};

export default ComposableUser;
