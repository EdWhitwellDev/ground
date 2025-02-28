import { useEffect, useRef } from 'react';
import Hls from 'hls.js';


const LiveStream = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const src = "https://ireplay.tv/test/blender.m3u8";
    useEffect(() => {
        const video = videoRef.current;
    
        if (!video) return;
    
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(err => console.error("Autoplay failed:", err));
          });
    
          return () => {
            hls.destroy();
          };
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src;
          video.addEventListener("loadedmetadata", () => {
            video.play().catch(err => console.error("Autoplay failed:", err));
          });
        }
      }, [src]);
    
    return (
        <div className="live-stream">
            <video ref={videoRef} controls autoPlay width="100%" height="100%">
                
            </video>
        </div>
    );
}

export default LiveStream;