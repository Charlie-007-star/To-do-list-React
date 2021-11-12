import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'

 const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
} 

Header.defaultProps = {
  title: "Task To-Do-List"
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
