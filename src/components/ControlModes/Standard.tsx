
const Standard = () => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonId = event.currentTarget.id;
        const inputValue = (event.currentTarget.previousElementSibling as HTMLInputElement).value;
        console.log(`Button ID: ${buttonId}, Input Value: ${inputValue}`);
        // Here you can add the logic to send the command to the rover
        const command = {
            instruction: buttonId,
            value: inputValue
        };
        fetch('http://192.168.1.102:8000/standard', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(command),
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
    }

    return (
        <div className="mode">
            <div className="instruction">
                Move Forward:
                <input style={{height:"30px"}}  type="number" placeholder="Enter distance in meters" />
                <button className="send_button" id="forward" onClick={(e) => handleClick(e)}>Send</button>
            </div>
            <div className="instruction">
                Move Backward:
                <input style={{height:"30px"}}  type="number" placeholder="Enter distance in meters" />
                <button className="send_button" id="backward" onClick={(e) => handleClick(e)}>Send</button>
            </div>
            <div className="instruction">
                Turn to Face:
                <input style={{height:"30px"}} type="number" placeholder="Enter bearing" />
                <button className="send_button" id="face" onClick={(e) => handleClick(e)}>Send</button>
            </div>
            <div className="instruction">
                Turn Left:
                <input style={{height:"30px"}}  type="number" placeholder="Enter angle" />
                <button className="send_button" id="left" onClick={(e) => handleClick(e)}>Send</button>
            </div>
            <div className="instruction">
                Turn right:
                <input style={{height:"30px"}}  type="number" placeholder="Enter angle" />
                <button className="send_button" id="right" onClick={(e) => handleClick(e)}>Send</button>
            </div>
        </div>
    );
}

export default Standard;