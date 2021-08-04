import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

const onClick = () => {
    console.log("Kurcina");
}

    return (
        <header className = 'header'>
            <h1>{props.title}</h1>
            <Button color = 'green' text = 'Hello' onClick = {onClick} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
