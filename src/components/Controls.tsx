import React from 'react'
import {useState} from 'react';
import { useEffect } from 'react';
import LiveStream from "./LiveStream";
import ThreedView from "./ThreedView";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Manual from './ControlModes/Manual';
import Standard from './ControlModes/Standard';
import Autonomous from './ControlModes/Autonomous';
import { useGlobalState } from './ContextManager';
const Controls = () => {
    const [tab, setTab] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };
    const { apiUrl } = useGlobalState();
    return (
        <div className="control_page">
            <div className="control_panel">
                <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Manual"  />
                    <Tab label="Standard"  />
                    <Tab label="Autonomous" />
                </Tabs>
                {tab === 0 && (<Manual />)}
                {tab === 1 && (<Standard />)}
                {tab === 2 && (<Autonomous src="terrain.glb" />)}
                
            </div>
            <div className="view">
                <div style={{ width: '100%', height: '50%' }}>
                    <LiveStream src={`${apiUrl}/video_feed`} />
                </div>
                <div style={{ width: '100%', height: '50%' }}>
                    <ThreedView src='terrain.glb'/>
                </div>
                
            </div>
        </div>
    );
}

export default Controls;