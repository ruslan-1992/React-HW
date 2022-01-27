import './App.css';
import UserList from './lesson 1/UserList';
import Header from './lesson 2/Header';
import Content from './lesson 2/Content';
import Sidebar from './lesson 2/Sidebar';
import Footer from './lesson 2/Footer';
import MouseCoordinates from './lesson 3/MouseCoordinates';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>        
      </header>
      <section>
        <Content/>
        <aside>
          <Sidebar/>
        </aside>
      </section>
      <footer>
        <Footer/>
      </footer>
      
      <div>
          <UserList/>
        </div>

      <div>
        <MouseCoordinates/>
      </div>
    </div>
  );
}

export default App;
