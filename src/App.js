import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Myrouter from './MyComponent/MyRouter';



function App() {
  return (
    <div className="App">    
    <BrowserRouter>

       <Myrouter> </Myrouter>
    </BrowserRouter>
    </div>
  );
}

export default App;
