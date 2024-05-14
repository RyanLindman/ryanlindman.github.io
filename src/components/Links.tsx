import { Box, List, ListItemButton, Typography } from '@mui/material'
import { navOptions } from './NavigationBar'
import { navOption } from './typesInterfaces'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <Box>
      <List sx={{ display: 'flex', gap: 4 }}>
        {navOptions.map((o: navOption, idx: number) => (
          <ListItemButton style={{ padding: 0 }} key={idx}>
            <Link
              style={{
                textDecoration: 'none',
              }}
              to={o.path || '/'}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#42A5F5',
                  fontFamily: 'Montserrat',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  opacity: 0.9,
                }}
              >
                {o.name}
              </Typography>
            </Link>
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default Links
