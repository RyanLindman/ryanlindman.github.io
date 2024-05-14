import {
  Box,
  Container,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import SeeMore from '../../components/SeeMore'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ImageBox from '../../components/ImageBox'
import './paper-content.css'

type PaperProps = {}

const PaperContent: React.FC<PaperProps> = () => {
  const mediaTheme = useTheme()
  const isSmallScreen = useMediaQuery(mediaTheme.breakpoints.down('md'))

  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          outlined: {
            padding: 10,
            background: '#323232',
          },
          root: {
            background: 'transparent',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          caption: {
            color: '#8F2EB2',
          },
          root: {
            fontFamily: 'Montserrat',
            color: '#ccc',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          container: {
            mt: 2,
            flexDirection: isSmallScreen ? 'row' : 'column',
          },
        },
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          mt={2}
          sx={{
            flexDirection: isSmallScreen ? 'row' : 'column',
            gap: 4,
          }}
        >
          <Grid item xs={12} md={8}>
            <Paper elevation={4}>
              <Container disableGutters>
                <Box>
                  <Paper variant="outlined">
                    <Typography variant="h6">Underground Kitchen</Typography>
                    <Typography variant="subtitle1">
                      Responsive Recipe App where you can browse and find
                      diffirent recipes for modern dishes. Giving the user step
                      by step instructions. This was my first time diving into
                      modern frontend technologies with React for a school
                      project, TypeScript based.
                    </Typography>
                    <SeeMore
                      text="See more on GitHub"
                      icon={
                        <OpenInNewIcon fontSize="small" htmlColor="#8F2EB2" />
                      }
                      href="https://github.com/RyanLindman/TierlisterApp/tree/main"
                    />
                  </Paper>
                </Box>
                <Box>
                  <Paper variant="outlined">
                    <Typography variant="h6">S-tier</Typography>
                    <Typography variant="subtitle1">
                      Tierlist App where you can input text and rate the subject
                      in tiers ranging from S-tier to D-tier. My first completed
                      fullstack school project. Using Java Spring and utilizing
                      Java Server Pages or 'JSP', MySQL, JavaScript, HTML, CSS
                    </Typography>
                    <SeeMore
                      text="See more on GitHub"
                      icon={
                        <OpenInNewIcon fontSize="small" htmlColor="#8F2EB2" />
                      }
                      href="https://github.com/RyanLindman/TierlisterApp/tree/main"
                    />
                  </Paper>
                  <Paper variant="outlined">
                    <Typography variant="h6">Cognito Login</Typography>
                    <Typography variant="subtitle1">
                      Java application containing Login authentication service
                      using AWS Cognito and an additional configured OpenID
                      external login provider allowing users to single sign on.
                      In this case i chose Google as the external provider
                      because it's the most popular.
                    </Typography>
                    <SeeMore
                      text="See more on GitHub"
                      icon={
                        <OpenInNewIcon fontSize="small" htmlColor="#8F2EB2" />
                      }
                      href="https://github.com/RyanLindman/aws-cognito-login"
                    />
                  </Paper>
                  <Paper variant="outlined">
                    <Typography variant="h6">Kundportalen</Typography>
                    <Typography variant="subtitle1">
                      Full-stack web application project during my 6-month
                      internship at DirSys. It's an internal tool that gathers
                      information about each customer and their product
                      enviroments in a table. It also allows CRUD operations for
                      these environments. Built on React TypeScript, Java Spring
                      REST API, Keycloak, PostgreSQL. My biggest project to
                      date. Here i got my first hands-on experience on a real
                      world code base and deliver a real world application.
                      Truly thrilling!
                      <br />
                      <i id="ii">
                        <br />
                        <span style={{ color: '#8F2EB2' }}>Unfortunetly</span> i
                        can't share the source code, but i'll gladly talk and
                        answer questions about it.
                      </i>
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        gap={2}
                        mt={2}
                        sx={{
                          flexDirection: isSmallScreen ? 'column' : 'row',
                          alignItems: isSmallScreen ? 'center' : '',
                        }}
                      >
                        <ImageBox
                          src="\src\assets\kundportal1.png"
                          alt="kundportal"
                          size={isSmallScreen ? '150px' : '200px'}
                        />
                        <ImageBox
                          src="\src\assets\kundportal2.png"
                          alt="kundportal"
                          size="200px"
                        />
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Container>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper>
              <Container disableGutters>
                <Box>
                  <Paper elevation={4}>
                    <Paper variant="outlined">
                      <Typography variant="h6">Profile</Typography>
                      <Typography variant="subtitle1">
                        I am 26 year old student soon completing my studies at
                        Jensen YH, where I'm studying{' '}
                        <i>Cloud Developer, AWS</i>. I've got to deploy several
                        applications to the cloud throughout my time at Jensen,
                        using services from AWS. But the program is not excluded
                        to cloud, as the name might suggest.
                        <br />
                        <br />
                        Languages and technologies studied:
                        <Box display="flex">
                          <ul>
                            <li>OOP with Java</li>
                            <li>Spring Boot</li>
                            <li>SQL</li>
                            <li>Datamodels</li>
                            <li>Cloud computing</li>
                          </ul>
                          <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS/TS</li>
                            <li>React</li>
                            <li>Material UI</li>
                          </ul>
                        </Box>
                        Complete list of courses can be shared
                      </Typography>
                    </Paper>
                  </Paper>
                </Box>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default PaperContent
