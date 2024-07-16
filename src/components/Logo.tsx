import { Link } from 'react-router-dom'

const Logo = (props: { size?: string }) => {
  const { size } = props
  return (
    <div>
      <Link to={'/'}>
        <img src="\assets\logo2023-3.png" alt="logo" style={{ width: size }} />
      </Link>
    </div>
  )
}

export default Logo
