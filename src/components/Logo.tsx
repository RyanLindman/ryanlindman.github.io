import React from 'react'

const Logo = (props: { size?: string }) => {
  const { size } = props
  return (
    <div>
      <img
        src="\src\assets\logo2023-3.png"
        alt="logo"
        style={{ width: size }}
      />
    </div>
  )
}

export default Logo
