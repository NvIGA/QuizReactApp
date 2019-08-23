import React, {Component} from 'react'
// import Layout from "../../hoc/layout/Layout";
import classes from  './About.css'

class About extends Component{
    render() {
        return (
            <div className={classes.About}>

                <div className={classes.AboutWrapper}>
                    <h1>About us</h1>
                    <div className="info">
                        &nbsp;Site created in React JS
                    </div>
                </div>

            </div>
        )
    }
}
export default About