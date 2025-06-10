import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import LiveStream from './components/LiveStream.tsx';
import ThreedView from './components/ThreedView.tsx';
import ManualControls from './components/Controls.tsx';
function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
              <Route exact path="/" element={<LiveStream src="http://192.168.1.102:8000/video_feed/0" />} />
              <Route exact path="/right" element={<LiveStream src="http://192.168.1.102:8000/video_feed/1" />} />
              <Route exact path="/eng_cam" element={<LiveStream src="http://192.168.1.102:8000/video_feed" />} />
              <Route exact path="/model" element={<ThreedView src='terrain.glb'/>} />
              <Route exact path="/manual" element={<ManualControls/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
