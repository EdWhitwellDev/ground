import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import LiveStream from './components/LiveStream.tsx';
import ThreedView from './components/ThreedView.tsx';
function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
              <Route exact path="/" element={<LiveStream/>} />
              <Route exact path="/model" element={<ThreedView src='terrain.glb'/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
