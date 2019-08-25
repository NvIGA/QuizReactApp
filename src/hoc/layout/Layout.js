import React, {Component} from 'react'
import classes from "./Layout.css"
import Drawer from "../../components/Navigations/Drawer/Drawer";
import MenuToggle from "../../components/Navigations/MenuToggle/MenuToggle";


class Layout extends Component{

    state = {
        menu: false
    }



    toggleMenuHandler = () =>{
        this.setState({
            menu: !this.state.menu
        })
    };

    render() {
        return(
            <div className={classes.Layout}>
                <Drawer
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}/>

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}/>

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;