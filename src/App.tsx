import { useState, type ChangeEvent } from 'react'
import './App.css'
import GridComponent from './components/grid-component/grid.component'
import { Input, } from '@mui/material';
import type { Direction } from './types/directions';
import inputParser from './utilities/input-parser';
import type { Coordinates } from './types/coordinates';

function App() {
  const [ position, setPosition ] = useState<string>('');
  const [ errorMessage, setErrorMessage ] = useState<string | null>(null);
  const [ xPosition, setXPosition ] = useState<Coordinates | null>(null);
  const [ yPosition, setYPosition ] = useState<Coordinates | null>(null);
  const [ direction, setDirection ] = useState<Direction | null>(null);

  /**
   * Handles the on change event
   * @param evt 
   */
  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.value;

    setPosition(inputValue);
    setErrorMessage(null);
  }

  /**
   * Event when user focuses out
   * @returns 
   */
  const inputBlurHandler = () => {
    if (!position.trim()) return;

    try {
      const { xCoordinate, yCoordinate, direction } = inputParser(position);

      setXPosition(xCoordinate);
      setYPosition(yCoordinate);
      setDirection(direction);
      setErrorMessage(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message);

      setXPosition(null);
      setYPosition(null);
      setDirection(null);
    }
  };

  return (
    <>
      <div className=''>
        <label style={{ color: '#FFF' }}>
          Place input
        </label>
        <Input 
          title="Sample input should be 0, 0, NORTH (can be SOUTH, EAST or WEST)"
          type="text" 
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={position}
          className='input-box' 
        />
        {errorMessage && <div className="errorMessage">
          {errorMessage}
          </div>}
      </div>
      
      <GridComponent 
        iconXPosition={xPosition} 
        iconYPosition={yPosition} 
        iconDirection={direction} 
      />
    </>
  )
}

export default App
