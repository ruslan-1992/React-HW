import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import  Home  from './lesson 6/Home';
import  Contacts  from './lesson 6/Contacts';
import ReviewsData from './lesson 6/Reviews ';
import SinglePage from './lesson 6/SinglePage';

function App6 () {
    
    return( 
        <div className='App'>
             

            <header className='routes'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/contacts'>Contacts</Link>
                <Link className='link' to='/reviews'>Reviews</Link>
                
            </header>
            <br/>
            
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/contacts' element={<Contacts/>} />
                    <Route path='/reviews' element={<ReviewsData/>} />
                    <Route path='/reviews/:id' element={<SinglePage/>} />
                </Routes>
           
        </div>        
);

}
export default App6;