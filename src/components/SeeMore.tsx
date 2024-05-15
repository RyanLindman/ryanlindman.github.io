import { Box, Typography } from '@mui/material'

const SeeMore = (props: {
  text: string
  icon?: React.ReactNode
  href?: string
}) => {
  const { text, icon, href } = props
  return (
    <div style={{ width: 'fit-content' }}>
      <a
        href={href}
        rel="noopener noreferrer"
        style={{ textDecorationLine: 'none', width: 'fit-content' }}
        target="_blank"
      >
        {' '}
        <br />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <Typography variant="caption">{text}</Typography>
          {icon && icon}
        </Box>
      </a>
    </div>
  )
}

export default SeeMore
