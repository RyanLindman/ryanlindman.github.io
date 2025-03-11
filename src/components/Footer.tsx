import { Box, Grid } from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import Breadcrumbs from './Breadcrumbs'

interface Links {
  icon: React.ReactNode
  href: string
}

interface FooterProps {
  links?: Links[]
  children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({links = [], children}) => {
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
          {children}
        </Box>
        <Box >
          {links.map((link, idx) => (
            <a key={idx} href={link.href} rel='noopener noreferrer' target='_blank'>
              {link.icon}
            </a>
          ))}
        </Box>    
      </Box>
    </Grid>
  )
}

export default Footer
