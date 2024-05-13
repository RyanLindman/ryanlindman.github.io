import React from 'react'
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Box,
  Slide,
} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Menu from './Menu'

type Props = {
  window?: () => Window
  children: any
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
// TODO: Add burger menu for small screens and standard nav links for large screens,
//       See if margin can be fixed in a better way (35)

const NavigationBar: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div style={{ marginBottom: 32 }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                height: 120,
                background:
                  'linear-gradient(90deg, rgba(57,92,130,1) 0%, rgba(15,54,97,1) 100%)',
              }}
            >
              <Menu />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container>
          <Box sx={{ my: 2 }}></Box>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default NavigationBar
