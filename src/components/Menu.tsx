import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import { useState } from 'react'
import { navOption } from './typesInterfaces'
import { Link } from 'react-router-dom'
type MenuProps = {}

const navOptions: navOption[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Menu: React.FC<MenuProps> = ({}) => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          body1: {
            color: 'white',
            letterSpacing: 1,
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 50,
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            background: '#8F2EB2',
            height: '100%',
          },
        },
      },
    },
  })

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    console.log('toggled drawer')
    setDrawerOpen(open)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon
            fontSize="large"
            className="hamburger"
            sx={{ color: 'primary.light' }}
          />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ color: 'secondary.light' }} />
          </IconButton>
          <List sx={{ width: '100%' }}>
            <Container>
              {navOptions.map((o: navOption, idx: number) => (
                <ListItemButton style={{ padding: 0 }} key={idx}>
                  <Link
                    style={{
                      textDecoration: 'none',
                    }}
                    to={o.path || ''}
                  >
                    <Typography variant="body1">{o.name}</Typography>
                  </Link>
                </ListItemButton>
              ))}
            </Container>
          </List>
        </Drawer>
      </ThemeProvider>
    </>
  )
}

export default Menu
