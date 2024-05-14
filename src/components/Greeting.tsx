import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'

type GreetingProps = {}

const Greeting: React.FC<GreetingProps> = ({}) => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Montserrat',
          },

          h1: {
            backgroundImage:
              'linear-gradient(90deg, rgba(136,36,187,1) 12%, rgba(209,138,185,1) 56%, rgba(161,143,203,1) 85%, rgba(135,194,210,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
            fontWeight: '500',
          },
          h5: {
            color: '#ccc',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          elevation4: {
            background: '#323232',
            padding: 10,
            width: 'fit-content',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            display: 'flex',
            flexDirection: 'column', // TODO: if desktop, row
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
          },
          disableGutters: {
            marginTop: 70,
          },
        },
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container disableGutters>
          <Typography variant="h1">Hej Hello Salam.</Typography>
          <Paper elevation={4}>
            <Typography variant="h5">
              My name is Ryan, welcome to my personal web👋
            </Typography>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Greeting
