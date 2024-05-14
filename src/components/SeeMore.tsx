import { Box, Typography } from '@mui/material'

const SeeMore = (props: {
  text: string
  icon?: React.ReactNode
  href?: string
}) => {
  const { text, icon, href } = props
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      style={{ textDecorationLine: 'none' }}
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
  )
}

export default SeeMore
