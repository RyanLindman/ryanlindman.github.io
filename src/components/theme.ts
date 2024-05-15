import { createTheme } from '@mui/material'

// changing default MUI palette

export const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#8F2EB2',
      light: '#e3f2fd',
    },
    secondary: {
      main: '#7C279A',
      light: '#F5EBFF',
    },
  },
  components: {},
})
