import { Box } from '@mui/material'

const ImageBox = (props: { src?: string; alt?: string; size?: string }) => {
  const { src, alt, size } = props

  return (
    <div>
      <Box>
        <img
          src={src}
          alt={alt}
          style={{ height: size, borderRadius: '5px' }}
        />
      </Box>
    </div>
  )
}

export default ImageBox
