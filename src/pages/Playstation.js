import React from "react";

function Playstation(){

    const [selectedButton, setSelectedButton] = useState(null);
  // Handle all the button clicks
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

    return (
        <div>
          <h1>Controller Shell Color</h1>
          <button
            style={{ backgroundColor: selectedButton === 1 ? 'red' : 'gray' }}
            onClick={() => handleButtonClick(1)}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: selectedButton === 2 ? 'green' : 'gray' }}
            onClick={() => handleButtonClick(2)}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: selectedButton === 3 ? 'blue' : 'gray' }}
            onClick={() => handleButtonClick(3)}
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: selectedButton === 4 ? 'orange' : 'gray' }}
            onClick={() => handleButtonClick(4)}
          >
            Carbon Fiber
          </button>
          <button
            style={{ backgroundColor: selectedButton === 5 ? 'pink' : 'gray' }}
            onClick={() => handleButtonClick(5)}
          >
            Pink
          </button>
          <p>Selected Button: {selectedButton}</p>
        </div>
      );


}