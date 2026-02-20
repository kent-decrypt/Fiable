import type { Meta, StoryObj } from '@storybook/react';
import GridComponent from './grid.component';

const meta: Meta<typeof GridComponent> = {
  title: 'Components/GridComponent',
  component: GridComponent,
};

export default meta;
type Story = StoryObj<typeof GridComponent>;

export const NormalCase: Story = {
  name: 'Normal Case: 1, 1, North',
  args: {
    iconXPosition: 1,
    iconYPosition: 1,
    iconDirection: 'NORTH',
  },
};

export const EdgeCase: Story = {
  name: 'Edge Case - placing the object at the grid boundaries',
  args: {
    iconXPosition: 4,
    iconYPosition: 4,
    iconDirection: 'WEST'
  }
}

// export const InvalidCase: Story = {
//   name: 'Invalid Input',
//   args: {
//     iconXPosition: 0,
//     iconYPosition: 2,
//     iconDirection: 'UP'
//   }
// }