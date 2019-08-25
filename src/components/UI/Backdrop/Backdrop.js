import React from 'react';
import classes from './Backdrop.css'

const Backdrop = props => {
    let listClasses =
        !props.isOpen ? ' ':  classes.Backdrop;
        return <div className={listClasses} onClick={props.onClick}> </div>
};
export default Backdrop