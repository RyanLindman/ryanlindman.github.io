import { Typography } from '@mui/material'

const Card = (props: {
  children: any
  title?: string
  undertitle?: string
  caption?: string
}) => {
  const { children, title, undertitle, caption } = props

  return (
    <div>
      <Typography variant="h3">{title}</Typography>

      <Typography variant="h6">
        <u>{undertitle}</u>
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
