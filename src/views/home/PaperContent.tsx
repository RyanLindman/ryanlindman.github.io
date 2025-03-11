import {
  Box,
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
import Card from '../about/Card'

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
          elevation4: {},
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
          h3: {
            fontWeight: 600,
            backgroundImage: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          container: {
            mt: 2,
            flexDirection: isSmallScreen ? 'column-reverse' : 'row',
            width: '100%',
            marginRight: 20,
          },
        },
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container mt={2} spacing={6}>
          <Grid item xs={12} md={8}>
            <Paper elevation={4}>
              <Paper variant="outlined">
                <Typography variant="h3">Projects</Typography>

                <Typography variant="h6">Underground Kitchen</Typography>
                <Typography variant="subtitle1">
                  Responsive Recipe App where you can browse and find diffirent
                  recipes for modern dishes. Giving the user step by step
                  instructions. This was my first time diving into modern
                  frontend technologies for a school project,
                  React TypeScript based UI.
                </Typography>
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
                    src="\assets\Skarmbild_63.png"
                    alt="recipe"
                    size={isSmallScreen ? '120px' : '160px'}
                  />
                  <ImageBox
                    src="\assets\Skarmbild_65.png"
                    alt="recipe_two"
                    size={isSmallScreen ? '120px' : '130px'}
                  />
                </Box>
                <SeeMore
                  text="See more on GitHub"
                  icon={<OpenInNewIcon fontSize="small" htmlColor="#8F2EB2" />}
                  href="https://github.com/RyanLindman/recipe-app"
                />
              </Paper>

              <Paper variant="outlined" sx={{ background: '#212121' }}>
                <Typography variant="h6">S-tier</Typography>
                <Typography variant="subtitle1">
                  Tierlist App where you can input text and rate the subject in
                  tiers ranging from S-tier to D-tier. My first completed
                  full-stack school project. Using Java Spring and utilizing
                  Java Server Pages or 'JSP', Docker, MySQL, JavaScript, HTML,
                  CSS.
                </Typography>
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
                    src="\assets\stier.png"
                    alt="s-tier"
                    size={isSmallScreen ? '120px' : '160px'}
                  />
                </Box>

                <SeeMore
                  text="See more on GitHub"
                  icon={<OpenInNewIcon fontSize="small" htmlColor="#8F2EB2" />}
                  href="https://github.com/RyanLindman/TierlisterApp/tree/main"
                />
              </Paper>
              <Paper variant="outlined">
                <Typography variant="h6">Cognito Login</Typography>
                <Typography variant="subtitle1">
                  Java application containing Login authentication service using
                  AWS Cognito and an additional configured OpenID external login
                  provider allowing users to single sign on. In this case i
                  chose Google as the external provider because it's the most
                  popular.
                </Typography>
                <SeeMore
                  text="See more on GitHub"
                  icon={<OpenInNewIcon fontSize="small" htmlColor="#8F2EB2" />}
                  href="https://github.com/RyanLindman/aws-cognito-login"
                />
              </Paper>
              <Paper variant="outlined" sx={{ background: '#212121' }}>
                <Typography variant="h6">Kundportalen</Typography>
                <Typography variant="subtitle1">
                  Full-stack web application project during my 
                  time at DirSys. It's an internal tool that gathers
                  data about each customer and their product enviroments
                  in a clear and easy accessible way. It also allows CRUD operations for these
                  environments. Built on React TypeScript, Java Spring REST API,
                  Keycloak, PostgreSQL. My biggest project to date. Here i got
                  my first hands-on experience on a real world code base and to
                  deliver a real world application.
                  <br />
                  <i id="ii">
                    <br />
                    <span style={{ color: '#8F2EB2' }}>Unfortunetly</span> I
                    can't share the source code for obvious reasons, but i'll gladly talk and answer
                    questions about it.
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
                      src="/assets\kundportal1.png"
                      alt="kundportal"
                      size={isSmallScreen ? '150px' : '200px'}
                    />
                    <ImageBox
                      src="/assets\kundportal2.png"
                      alt="kundportal"
                      size="200px"
                    />
                  </Box>
                </Typography>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper>
              <Box display={isSmallScreen ? '' : 'flex'}>
                <Paper elevation={4} sx={{ width: '352px' }}>
                  <Paper variant="outlined" sx={{ background: '#212121' }}>
                    <Typography variant="h3">Profile</Typography>
                    <Typography variant="subtitle1">
                      I'm a 27 year old entry level full-stack developer 
                      whos currently seeking
                      work in related fields. <br />
                      <br />
                      Languages and technologies I've worked with both professionally and educationally:
                      <Box display="flex">
                        <strong>
                          <ul>
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS/SASS</li>
                            <li>JavaScript/TypeScript</li>
                            <li>React</li>                          
                          </ul>
                          <ul>                         
                            <li>Data models</li>
                            <li>AWS</li>
                            <li>Git</li>
                            <li>CI/CD</li>
                            <li>Linux</li>
                            <li>Docker</li>
                            <li>Material UI</li>
                            <li>Figma</li>
                            <li>Office 365</li>
                          </ul>
                        </strong>
                        {!isSmallScreen ? (
                          <ImageBox
                            src="\assets\dots.png"
                            size="130px"
                            rotate="300deg"
                          />
                        ) : null}
                      </Box>
                    </Typography>
                  </Paper>
                  <Paper variant="outlined">
                    <Card title="What i like to do">
                      <Box
                        sx={{
                          background: '#212121',
                          padding: 2,
                          borderRadius: 1,
                          display: 'flex',
                          flexDirection: isSmallScreen ? 'column' : 'row',
                          gap: 2,
                        }}
                      >
                        <Box
                          display={'flex'}
                          gap={2}
                          sx={{
                            flexDirection: isSmallScreen ? 'column' : 'row',
                            alignItems: isSmallScreen ? 'center' : '',
                          }}
                        >
                          {/* <ImageBox src="\assets\are.jpeg" size="300px" /> */}
                          <ImageBox src="\assets\Image.jpeg" size="300px" />
                        </Box>
                        <Typography variant="subtitle2">
                          Skiing is something me and my friends try to do each
                          year. The images are from our last trip to beloved
                          Åre, Sweden.
                        </Typography>
                      </Box>
                      <Box display={'flex'} gap={2} mt={5}>
                        <Box
                          sx={{
                            background: '#212121',
                            padding: 2,
                            borderRadius: 1,
                          }}
                        >
                          <Box
                            display={'flex'}
                            gap={2}
                            sx={{
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <ImageBox src="\assets\Image22.png" size="300px" />
                            <ImageBox
                              src="\assets\image23.jpg"
                              size={isSmallScreen ? '150px' : '200px'}
                              alt="not"
                            />
                          </Box>
                          <Typography variant="subtitle2">
                            Big fan of art and history.
                            <br />
                            Images from Rome, Italy.
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Paper>
                </Paper>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default PaperContent
