import React from 'react'
import './button.css'

const Button = ({text}) => {
    return (
        <div className='button'>
            {text}
        </div>
    )
}

export default Button
