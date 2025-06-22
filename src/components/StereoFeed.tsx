import LiveStream from "./LiveStream";

interface LiveStreamProps {
    src: string;
}

const stereoFeed: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const StereoFeed: React.FC<LiveStreamProps> = ({src}) => {
  return (
    <div style={stereoFeed}>
        <div className="">
            <LiveStream src={src+"/0"} />
        </div>
        <div className="">
            <LiveStream src={src+"/1"} />
        </div>
    </div>
  );
}

export default StereoFeed;