import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  isMuiElement,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import NavigationBar from '../../components/NavigationBar'

const Contact = () => {
  const mediaTheme = useTheme()
  const isSmallScreen = useMediaQuery(mediaTheme.breakpoints.down('md'))

  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Montserrat',
            color: '#ccc',
            fontSize: isSmallScreen ? '16px' : '',
          },
        },
      },
    },
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar children={undefined} />
        <Container sx={{ mt: 10 }}>
          <Paper
            elevation={6}
            sx={{
              display: 'flex',
              background: '#323232',
              padding: isSmallScreen ? '6px' : 20,
              flexDirection: 'column',
              alignItems: isSmallScreen ? '' : 'center',
              gap: 3,
            }}
          >
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <EmailIcon fontSize="large" color="secondary" />
              <Typography variant="h4">ryan.lindman@outlook.com</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <PhoneIcon fontSize="large" color="secondary" />
              <Typography variant="h4">+(46)728 59 34 60</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <a
                href="https://www.linkedin.com/in/ryan-lindman-0bb377276/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" color="secondary" />
              </a>
              <Typography variant="h4">Connect with me on LinkedIn</Typography>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Contact
