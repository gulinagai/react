import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button
    style={{width: `${props.width}`}}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  width: '300px'
}

Button.propTypes = {
  width: PropTypes.string.isRequired
}

export default Button
