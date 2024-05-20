import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

export function App() {
  const [showSteps, setShowSteps] = useState(false);
  const [coffeeType, setCoffeeType] = useState('Espresso');
  const [waterAmount, setWaterAmount] = useState('');
  const [coffeeAmount, setCoffeeAmount] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const fade = useSpring({
    opacity: showSteps ? 1 : 0,
    marginTop: showSteps ? 0 : -50,
  });

  const handleCoffeeTypeChange = (event) => {
    setCoffeeType(event.target.value);
  };

  const handleWaterAmountChange = (event) => {
    setWaterAmount(event.target.value);
  };

  const handleCoffeeAmountChange = (event) => {
    setCoffeeAmount(event.target.value);
    if (event.target.value > 30) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <div className="coffee-machine">
      <div className="coffee-machine-body">
        <div className="coffee-machine-screen">
          <h1 className="title">How to Make Coffee</h1>
          <div className="options">
            <label htmlFor="coffeeType">Select Coffee Type: </label>
            <select id="coffeeType" value={coffeeType} onChange={handleCoffeeTypeChange}>
              <option value="Espresso">Espresso</option>
              <option value="Americano">Americano</option>
              <option value="Cappuccino">Cappuccino</option>
              <option value="Latte">Latte</option>
            </select>
            <label htmlFor="waterAmount">Water Amount (ml): </label>
            <input type="number" id="waterAmount" value={waterAmount} onChange={handleWaterAmountChange} />
            <label htmlFor="coffeeAmount">Coffee Amount (grams): </label>
            <input type="number" id="coffeeAmount" value={coffeeAmount} onChange={handleCoffeeAmountChange} />
            {showWarning && <p className="warning">Warning: Excessive caffeine intake can be harmful. Please drink responsibly.</p>}
          </div>
          <button onClick={() => setShowSteps(!showSteps)} className="toggle-button">
            {showSteps ? 'Hide Steps' : 'Show Steps'}
          </button>
        </div>
        <animated.div style={fade} className="coffee-machine-content">
          <div className="steps">
            <h2 className="step-title">Steps:</h2>
            <ol>
              <li>Boil {waterAmount} ml of water in a kettle or pot.</li>
              <li>Measure {coffeeAmount} grams of {coffeeType} coffee.</li>
              <li>Add the coffee grounds to a coffee filter.</li>
              <li>Pour the hot water over the grounds.</li>
              <li>Let it steep for a few minutes.</li>
              <li>Remove the filter and discard the grounds.</li>
              <li>Pour the brewed coffee into a cup.</li>
              <li>Add any desired extras, like milk or sugar.</li>
              <li>Enjoy your coffee!</li>
            </ol>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
