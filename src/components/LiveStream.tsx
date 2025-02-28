const LiveStream = () => {
    return (
        <div className="live-stream">
            <video controls autoPlay width="100%" height="100%">
                <source src="https://cdn-videos.akamaized.net/va01201/hls/NASA-NTV2-PUB/playlist.m3u8" type="application/x-mpegURL" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default LiveStream;