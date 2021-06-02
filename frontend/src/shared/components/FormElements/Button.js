import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = (props) => {
  // if a normal link
  if (props.href) {
    return (
      <a className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${props.danger && 'button--danger'}`} href={props.href}>
        {props.children}
      </a>
    )
  }
  // if an internal "link"
  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact} className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${props.danger && 'button--danger'}`}>
        {props.children}
      </Link>
    )
  }
  // if it's neither, it's a button!
  return (
    <button className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${props.danger && 'button--danger'}`} type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  )
}

export default Button
