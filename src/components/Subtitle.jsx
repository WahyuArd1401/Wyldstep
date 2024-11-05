import React from 'react'

const Subtitle = ({ children, classname }) => {
  return (
    <h2 className={`text-center text-3xl font-monument capitalize mb-8 `+ classname }>{children}</h2>
  )
}

export default Subtitle