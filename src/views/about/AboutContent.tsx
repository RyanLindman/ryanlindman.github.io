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
                During my studies at Jensen I worked hours at DirSys and I also
                did my 6-month internship. Here I co-lead the frontend development of an inhouse full-stack project.
                The project was a tool for the company to create environments for every new costumer and have clear data of what each costumer owned. 
              </Typography>
            </Card>
          </Paper>
          <Paper variant="outlined" sx={{ background: '#272727' }}>
            <Card
              undertitle="Substitute Teacher at Humly AB"
              caption="April 2022 - June 2024"
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
              caption="September 09 2017 - present"
            >
              <Typography>
                My first job after high school, here i worked for the Paint
                Shop. Elected as safety delegate during my first year.
                <br />Later I took responsibility for following up our uptime and downtime, visualizing our delivery data through AXXOS, PowerBI and Excel to help our team to understand our weekly deliverance.
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
                technologies and backend development. 400YH.
              </Typography>
            </Card>
          </Paper>
          <Paper variant="outlined">
            <Card
              undertitle="Skriva, grundkurs - Göteborgs Universitet"
              caption="Januari 2022 - June 2022"
            >
              <Typography>Course in writing. 30HP.</Typography>
            </Card>
          </Paper>
          <Paper variant="outlined" sx={{ background: '#272727' }}>
            <Card
              undertitle="Retorik, grundkurs - Göteborgs Universitet"
              caption="September 2021 - Januari 2022"
            >
              <Typography>Course in rhetoric. 30HP.</Typography>
            </Card>
          </Paper>
          <Paper variant="outlined">
            <Card
              undertitle="Juridisk Introduktionskurs - Lunds Universitet"
              caption="September 2021 - Januari 2022"
            >
              <Typography>Intro course for law school. 15HP.</Typography>
            </Card>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default AboutContent
