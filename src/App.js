import './App.css';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import NewsPage from './components/NewsPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NewsPage/>}/>
        <Route path='/:category' element={<NewsPage/>}/>
      </Routes>
    </div> 
  );
}

export default App;
