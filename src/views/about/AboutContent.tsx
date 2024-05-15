import {
  Box,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Card from './Card'

const AboutContent = () => {
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            background: '#323232',

            padding: 15,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Montserrat',
            color: '#ccc',
          },
          h3: {
            fontWeight: 500,
            backgroundImage: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          },
          h6: {
            color: 'white',
          },
        },
      },
    },
  })
  const mediaTheme = useTheme()
  const isSmallScreen = useMediaQuery(mediaTheme.breakpoints.down('md'))

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          mt: 15,
          gap: 10,
          flexDirection: isSmallScreen ? 'column' : 'row',
        }}
      >
        <Box>
          <Paper variant="outlined">
            <Card
              title={'Experience'}
              undertitle="Developer at DirSys AB "
              caption="September 2023 - May 2024"
            >
              <Typography>
                During my studies at Jensen i worked hours at DirSys and i also
                did my 6-month internship. Here i worked on a full-stack project
                from scratch.
              </Typography>
            </Card>
          </Paper>
          <Paper variant="outlined" sx={{ background: '#272727' }}>
            <Card
              undertitle="Substitute Teacher at Humly AB"
              caption="April 2022 - present"
            >
              <Typography>
                Worked as assisting and substitute teacher at Hovåsskolan for
                children with special neeeds
              </Typography>
            </Card>
          </Paper>
          <Paper variant="outlined">
            <Card
              undertitle="Operator & safety delegate at Volvo Cars Torslanda "
              caption="September 09 2017 - study leave"
            >
              <Typography>
                My first job after high school, here i worked for the Paint
                Shop. Elected as safety delegate during my first year.
              </Typography>
            </Card>
          </Paper>
        </Box>
        <Box>
          <Paper variant="outlined" sx={{ background: '#272727' }}>
            <Card
              title="Education"
              undertitle="Cloudutvecklare, AWS - Jensen Yrkeshögskola"
              caption="September 2022 - June 2024"
            >
              <Typography>
                2-year program in software development, with focus on cloud
                technologies
              </Typography>
            </Card>
          </Paper>
          <Paper variant="outlined">
            <Card
              undertitle="Skriva, grundkurs - Göteborgs Universitet"
              caption="Januari 2022 - June 2022"
            >
              <Typography>30HP course in writing</Typography>
            </Card>
          </Paper>
          <Paper variant="outlined" sx={{ background: '#272727' }}>
            <Card
              undertitle="Retorik, grundkurs - Göteborgs Universitet"
              caption="September 2021 - Januari 2022"
            >
              <Typography>30HP course in rhetoric</Typography>
            </Card>
          </Paper>
          <Paper variant="outlined">
            <Card
              undertitle="Juridisk Introduktionskurs - Lunds Universitet"
              caption="September 2021 - Januari 2022"
            >
              <Typography>15HP intro course for law school</Typography>
            </Card>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default AboutContent
