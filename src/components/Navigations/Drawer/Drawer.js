import React, {Component} from 'react'
import classes from './Drawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: '', exact:true} ,
    {to: '/auth', label: 'Auth', exact:false} ,
    {to: '/quiz-list', label: 'Quiz list', exact:true} ,
    {to: '/quiz-create', label: 'Create Quiz', exact:true} ,
    {to: '/about', label: 'About us', exact:true}

];

let listStyles = [
    classes.Drawer
];


class Drawer extends Component {

    clickHandler = () => {
        this.props.onToggle();

    };

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index} onClick={ () => {}}>
                    <NavLink
                        exact={link.exact}
                        to={link.to}
                        activeClassName={classes.drawLiActive}
                        onClick={this.clickHandler}
                    >
                        {link.label}</NavLink>
                </li>
            )
        })
    }


    render() {

        !this.props.isOpen
            ? listStyles.push(classes.closes)
            : listStyles = [classes.Drawer];

        return (
            <React.Fragment>
                <nav className={listStyles.join(' ')}>
                    <ul>
                        {this.renderLinks()}

                    </ul>
                </nav>
                <Backdrop
                    isOpen={this.props.isOpen}/>
            </React.Fragment>

        )
    }
}


export default Drawer