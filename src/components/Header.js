import React from 'react'
import propTypes from 'prop-types'

import Button from './Button'

const onClick = (e) => {
        console.log('clicked')
    }

 const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="Black" text="Add" onClick={onClick}/>
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
