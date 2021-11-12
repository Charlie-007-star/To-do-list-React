import React from 'react'
import propTypes from 'prop-types'


export const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
} 

Header.defaultProps = {
  title: "Winter Soldier"
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
