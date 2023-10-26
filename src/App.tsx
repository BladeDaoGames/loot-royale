import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Rooms, Login, WaitingRoom, InGame, Reward } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/waiting" element={<WaitingRoom />} />
        <Route path="/in-game" element={<InGame />} />
        <Route path="/reward" element={<Reward />} />
        {/* Add a default redirect or a default route if necessary */}
      </Routes>
    </Router>
  );
}

export default App;
