import type { Preview } from "@storybook/react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({});

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default preview;