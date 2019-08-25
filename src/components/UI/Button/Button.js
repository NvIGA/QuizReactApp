import React from 'react'
import classes from './Button.css'

let btnClasses = [classes.Button];

function btnState(touchedBtn ,isFormValid) {
    if (touchedBtn === true && isFormValid === false) {
        btnClasses.push(classes.disabled)
    } else {
        btnClasses = [classes.Button]
    }

}

const Button = (props) => {
    btnState(props.touchedBtn, props.isFormValid);
    return (
        <div className={btnClasses.join(' ')} onClick={props.onClick}>
            <div className={classes.Module}>
                {props.children}
            </div>
        </div>
    )
}


export default Button