import './App.css';
import Header from './lesson 2/Header';
import Content from './lesson 2/Content';
import Sidebar from './lesson 2/Sidebar';
import Footer from './lesson 2/Footer';

function App2() {
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

    </div>
  );
}

export default App2;
