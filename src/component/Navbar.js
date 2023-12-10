import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
    // Below code is to change mode from a button, every state is defined in this same componet
    // let [theme,setTheme] =useState("dark") 
    // let [btnText,setBtnTheme] =useState("Light") 
    // function changeTheme(e) {
    //     if (theme === "dark") {
    //         setTheme("light")
    //         setBtnTheme("Dark")
    //     } else {
    //         setTheme("dark")
    //         setBtnTheme("Light")
    //     }
    // }
    // return (
    //     <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
    //         <div className="container-fluid">
    //             <a className="navbar-brand" to="/">{props.title}</a>
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                     <li className="nav-item">
    //                         <a className="nav-link active" aria-current="page" to="/">Home</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" to="/">{props.aboutTitle}</a>
    //                     </li>
    //                     {/* <li className="nav-item dropdown">
    //                         <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                             Dropdown
    //                         </a>
    //                         <ul className="dropdown-menu">
    //                             <li><a className="dropdown-item" to="/">Action</a></li>
    //                             <li><a className="dropdown-item" to="/">Another action</a></li>
    //                             <li><hr className="dropdown-divider" /></li>
    //                             <li><a className="dropdown-item" to="/">Something else here</a></li>
    //                         </ul>
    //                     </li> */}
    //                     {/* <li className="nav-item">
    //                         <a className="nav-link disabled" aria-disabled="true">Disabled</a>
    //                     </li> */}
    //                 </ul>
    //                 <form className="d-flex" role="search">
    //                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //                     <button className="btn btn-outline-success" type="button" onClick={changeTheme}>{btnText} Theme</button>
    //                 </form>
    //             </div>
    //         </div>
    //     </nav>
    // )


    // And below code is to change the mode when state's are defined in app.js file and state will be changed from App.js component. 
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <input className="form-check-input" type="checkbox" role="switch" onClick={props.changeMode} id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "dark" ? "Light" : "Dark"} mode</label>
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string
}
Navbar.defaultProps = {
    title: "Textutils Title",
    aboutTitle: "About Textutils",
}