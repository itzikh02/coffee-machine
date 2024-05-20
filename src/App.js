import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography
} from "@mui/material";
import Alert from '@mui/material/Alert';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import "./App.css";

export function App() {
  const [showSteps, setShowSteps] = useState(false);
  const [coffeeType, setCoffeeType] = useState("");
  const [waterAmount, setWaterAmount] = useState("");
  const [coffeeAmount, setCoffeeAmount] = useState("");
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
          <Typography variant="h2" className="title">
            Coffee Machine
          </Typography>
          <br />
          <div className="options">
            <div className="select-wrapper">
              <FormControl fullWidth className="select-box">
                <InputLabel>Select coffee type</InputLabel>
                <Select
                  displayEmpty
                  notched={true}
                  id="coffeeType"
                  value={coffeeType}
                  onChange={handleCoffeeTypeChange}
                >
                  <MenuItem value="Espresso">Espresso</MenuItem>
                  <MenuItem value="Americano">Americano</MenuItem>
                  <MenuItem value="Cappuccino">Cappuccino</MenuItem>
                  <MenuItem value="Latte">Latte</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField
              id="waterAmount"
              label="Water Amount (ml)"
              type="number"
              value={waterAmount}
              onChange={handleWaterAmountChange}
              className="select-box"
            />
            <TextField
              id="coffeeAmount"
              label="Coffee Amount (grams)"
              type="number"
              value={coffeeAmount}
              onChange={handleCoffeeAmountChange}
              className="select-box"
            />
            {showWarning && (
              <Alert icon={<HeartBrokenIcon fontSize="inherit" />} severity="error">
               Warning: Excessive caffeine intake can be harmful. Please drink
                responsibly.
            </Alert>
              
            )}
          </div>
            <br />
          <Button
            variant="contained"
            onClick={() => setShowSteps(!showSteps)}
            className="toggle-button"
          >
            {showSteps ? "Hide" : "Make Coffee"}
          </Button>
        </div>
        <animated.div style={fade} className="coffee-machine-content">
          <div className="steps">
            <Typography variant="h2" className="step-title">
              Steps:
            </Typography>
            <ol>
              <li>Boil {waterAmount} ml of water in a kettle or pot.</li>
              <li>
                Measure {coffeeAmount} grams of {coffeeType} coffee.
              </li>
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
