import { Typography } from '@mui/material'

type ImageProps = {
  src: string
  alt?: string
  imgStyle?: React.CSSProperties
}

const Card = (props: {
  children: any
  title?: string
  undertitle?: string
  caption?: string
  img?: ImageProps

}) => {
  const { children, title, undertitle, caption, img } = props

  return (
    <div className='container'>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h6">
      <div className='undertitle'>
      <u>{undertitle}</u>
      </div>
      </Typography>
      <Typography variant="subtitle2">
        <i>{caption}</i>
      </Typography>
      <br />
      {children}
    </div>
  )
}

export default Card
