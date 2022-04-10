import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppMain from './components/AppMain';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/*' element={<AppMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
