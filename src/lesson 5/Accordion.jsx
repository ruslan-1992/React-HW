import React, { useState, createContext } from 'react';
import Header from './Header';
import Content from './Content';

export const AccordionContext=createContext();

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
   
    return (
    <AccordionContext.Provider value={{isActive,setIsActive}}>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </AccordionContext.Provider>
    );
  };

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;