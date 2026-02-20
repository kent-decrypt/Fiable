import type { Coordinates } from '../types/coordinates';
import type { Direction } from '../types/directions';

const validCoordinates = [0, 1, 2, 3, 4];
const validDirections = ['NORTH', 'SOUTH', 'EAST', 'WEST'];

const inputParser = (
  inputValue: string,
): {
  xCoordinate: Coordinates;
  yCoordinate: Coordinates;
  direction: Direction;
} => {
  const valueArray = inputValue.replaceAll(' ', '').split(',');

  if (valueArray.length !== 3) {
    throw new Error('Invalid input! Data example should be 0, 0, NORTH');
  }

  const xCoordinate: number = parseInt(valueArray[0]);
  const yCoordinate: number = parseInt(valueArray[1]);

  const xCoordinateErrorMessage = isValidCoordinate('x', xCoordinate);
  if (xCoordinateErrorMessage) {
    throw new Error(xCoordinateErrorMessage);
  }

  const yCoordinateErrorMessage = isValidCoordinate('y', yCoordinate);
  if (yCoordinateErrorMessage) {
    throw new Error(yCoordinateErrorMessage);
  }

  const directionValue = valueArray[2].toUpperCase().trim();
  if (!validDirections.includes(directionValue)) {
    throw new Error(
      "Direction should either be 'NORTH', 'SOUTH', 'WEST' or 'EAST'",
    );
  }

  return {
    xCoordinate: xCoordinate as Coordinates,
    yCoordinate: yCoordinate as Coordinates,
    direction: directionValue as Direction,
  };
};

const isValidCoordinate = (
  coordinate: string,
  value: number,
): string | null => {
  if (!validCoordinates.includes(value)) {
    return `${coordinate} coordinate should only be 1, 2, 3, or 4`;
  }

  return null;
};

export default inputParser;
