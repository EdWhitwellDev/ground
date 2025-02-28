import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import Stub from './components/Stub.tsx';
import LiveStream from './components/LiveStream.tsx';
function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
              <Route exact path="/" element={<LiveStream/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
