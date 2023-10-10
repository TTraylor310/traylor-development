import { useState } from 'react';

function Check() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>
        Button 1
      </button>
      <button onClick={() => handleButtonClick(2)}>
        Button 2
      </button>
      <button onClick={() => handleButtonClick(3)}>
        Button 3
      </button>
    </div>
  );
}

export default Check;
