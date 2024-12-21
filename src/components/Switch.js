import React from 'react';


const Switch = () => {
  const [isOn, setIsOn] = React.useState(true); 

  function change() {
    setIsOn(prev => !prev);
  }

  return (
    <div className="container">
     
      <div className={`bulb ${isOn ? 'on' : ''}`}></div>
     
      <button onClick={change} className="switch-button">
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default Switch;
