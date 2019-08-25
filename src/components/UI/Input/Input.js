import React from 'react'
import classes from './Input.css'

const Input = props => {
    const inputTypes = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputTypes}-${Math.random()}`;

    function isInvalid({valid, touched}) {
        return !valid && touched
    }

    if (isInvalid(props)){
        cls.push(classes.invalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputTypes}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props)
                    ? <span>{props.errorMessage}</span>
                    : null
            }
        </div>
    )
};

export default Input