import { useState } from "react";
const inputStyle = {
    height:"50px", 
    fontSize:"30px", 
    borderRadius:"10px", 
    border:"1.5px solid rgb(150, 150, 150)"
}
const Manual = () => {
    
    const [frontLeftPower, setFrontLeftPower] = useState(0);
    const [rearLeftPower, setRearLeftPower] = useState(0);
    const [frontRightPower, setFrontRightPower] = useState(0);
    const [rearRightPower, setRearRightPower] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleSend = (event: React.MouseEvent<HTMLButtonElement>) => {
        const body = {
            front_left: frontLeftPower,
            front_right: frontRightPower,
            rear_left: rearLeftPower,
            rear_right: rearRightPower,
            duration: duration
        }
        fetch('http://192.168.1.102:8000/granular', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
    }
    const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFrontLeftPower(100);
        setRearLeftPower(100);
        setFrontRightPower(100);
        setRearRightPower(100);
        setDuration(0);
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        const intValue = parseInt(value, 10);
        if (id === "FL") setFrontLeftPower(intValue);
        else if (id === "RL") setRearLeftPower(intValue);
        else if (id === "FR") setFrontRightPower(intValue);
        else if (id === "RR") setRearRightPower(intValue);
        else if (id === "duration") setDuration(event.target.valueAsNumber);
    }

    return (
        <div className ="mode">
            <span style={{width:"95%"}}>
                <button
                onClick ={(e) => handleReset(e)} 
                style={{width:"100px", height:"100px", borderRadius:"10px", fontSize: "16px", cursor: "pointer", border:"2px solid rgb(150, 150, 150)", background:"white"}} 
                id="Reset">Reset</button>
            </span>
            <div className="manual_control">
                <div className="motor_powers">
                    <span>
                        <p style={{fontSize:"20px"}}>FL:</p>
                        <input id="FL" style={inputStyle} type="number" min="-100" max="100" step="1" onChange={(e) => handleInputChange(e)} value={frontLeftPower}/>
                    </span>
                    <span>
                        <p style={{fontSize:"20px"}}>RL:</p>
                        <input id="RL" style={inputStyle} type="number" min="-100" max="100" step="1" onChange={(e) => handleInputChange(e)} value={rearLeftPower}/>
                    </span>
                </div>
                <img src="/images/chassis.png" alt="chassis" />
                <div className="motor_powers">
                    <span>
                        <p style={{fontSize:"20px"}}>FR:</p>
                        <input id="FR" style={inputStyle} type="number" min="-100" max="100" step="1" onChange={(e) => handleInputChange(e)} value={frontRightPower}/>
                    </span>
                    <span>
                        <p style={{fontSize:"20px"}}>RR:</p>
                        <input id="RR" style={inputStyle} type="number" min="-100" max="100" step="1" onChange={(e) => handleInputChange(e)} value={rearRightPower}/>
                    </span>
                </div>
            </div>            
            <div className="button_board">
                <span style={{display:"flex", justifyContent:"start"}}>
                    <p>Duration: </p>
                    <input id="duration" style={inputStyle} type="number" min="0" max="100" step="0.01" onChange={(e) => handleInputChange(e)} value={duration}/>
                    <p>s</p>
                </span>
                <button onClick={(e) => handleSend(e)} className="send_button" style={{width:"100px"}} id="Send">Send</button>
                
            </div>
        </div>
    );
}

export default Manual;