import { Box } from '@mui/material'

const ImageBox = (props: {
  src?: string
  alt?: string
  size?: string
  rotate?: string
}) => {
  const { src, alt, size, rotate } = props

  return (
    <div>
      <Box>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ height: size, borderRadius: '5px', rotate: rotate }}
        />
      </Box>
    </div>
  )
}

export default ImageBox
