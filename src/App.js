import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import StereoFeed from './components/StereoFeed.tsx';
import LiveStream from './components/LiveStream.tsx';
import ThreedView from './components/ThreedView.tsx';
import ManualControls from './components/Controls.tsx';
import { GlobalStateProvider } from './components/ContextManager.tsx';
function App() {
  const apiUrl = 'http://192.168.1.102:8000';
  return (
    <GlobalStateProvider apiUrl={apiUrl}>
      <Router>
        <div className="container">
          <Sidebar />
        <div className="content">
          <Routes>
              <Route exact path="/" element={<LiveStream src="http://192.168.1.102:8000/video_feed" />} />
              <Route exact path="/stereo" element={<StereoFeed src="http://192.168.1.102:8000/video_feed" />} />
              <Route exact path="/model" element={<ThreedView src='terrain.glb'/>} />
              <Route exact path="/manual" element={<ManualControls/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </GlobalStateProvider>
  );
}

export default App;
