import { Box, Grid } from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import Breadcrumbs from './Breadcrumbs'

const Footer = () => {
  return (
    <Grid container pl={2} pr={2}>
      <Box
        sx={{
          width: '100%',
          height: '200px',
          background: '#ccc2',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          mt: 15,
        }}
      >
        <Box>
          <Breadcrumbs />
        </Box>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <a
            href="https://www.linkedin.com/in/ryan-lindman-0bb377276/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/RyanLindman"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </Box>
      </Box>
    </Grid>
  )
}

export default Footer
