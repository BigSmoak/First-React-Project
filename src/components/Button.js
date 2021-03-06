import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button style = {{ backgroundColor: color }} 
                className = 'btn' 
                onClick = {onClick}>{text}</button>
    )
}

Button.propType = {
    style: PropTypes.string,
    onclick: PropTypes.func,
    text: PropTypes.string
}

export default Button
