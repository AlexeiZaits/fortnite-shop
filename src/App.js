
import './App.css';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';
import { ContextProvider } from './contex';


function App() {
  return (
    <div className="App">
      <Header/>
      <ContextProvider>
        <Main/>
      </ContextProvider>
      <Footer/>
    </div>
  );
}

export default App;


