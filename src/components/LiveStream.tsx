// react component to take a url and display an image from that url
import React, { useEffect, useState } from 'react'; 


interface LiveStreamProps {
    src: string;
}

const LiveStream: React.FC<LiveStreamProps> = ({src}) => {
    return (
        <div className="live-stream">
            {src && <img src={src} alt="Live Stream" />}
        </div>
    );
}

export default LiveStream;