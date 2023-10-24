import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Rooms } from './components';
import { Login } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        {/* Add a default redirect or a default route if necessary */}
      </Routes>
    </Router>
  );
}

export default App;
