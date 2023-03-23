import React from 'react';

const Button = ({type, variant, className, id, onClick, children}) => {
    return <button type={type='button'} variant={variant} className={className} id={id} onClick={onClick}>{children}</button>
}

export default Button;