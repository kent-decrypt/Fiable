import type { Direction } from '../../types/directions';

/**
 * Property used for the GridComponent
 */
export interface GridComponentProps {
  iconXPosition: 0 | 1 | 2 | 3 | 4 | null;
  iconYPosition: 0 | 1 | 2 | 3 | 4 | null;
  iconDirection: Direction | null;
}
