import * as React from 'react'



const Link : React.StatelessComponent<any> = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a 
      href='#'
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link