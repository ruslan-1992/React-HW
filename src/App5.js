import React from 'react';
import './App.css';
import Accordion from './lesson 5/Accordion';
import accordionData from './lesson 5/AccodionData';

function App5 () {
    return( 
        <div className='App5'>
          <h1>React Accordion</h1>
          {accordionData.map(({title, content}) => 
            <Accordion>
              <Accordion.Header>{title}</Accordion.Header>
              <Accordion.Content>{content}</Accordion.Content>
            </Accordion>
          )}
        </div>        
);

}
export default App5;